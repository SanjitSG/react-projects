import { createContext, useContext, useReducer } from "react";

// --- types --- //
export interface Expense {
	id: number;
	title: string;
	description: string;
	category: string;
	amount: number;
}

export interface ExpenseState {
	expenses: Expense[];
}

export type ExpenseAction =
	| { type: "ADD_EXPENSE"; payload: Expense }
	| { type: "DELETE_EXPENSE"; payload: number }
	| { type: "EDIT_EXPENSE"; payload: Expense }
	| { type: "SET_FILTER"; payload: string };

// --- end --- //

// initial state
const initialState: ExpenseState = {
	expenses: [],
};

// refucer function
const expenseReducer = (
	state: ExpenseState,
	action: ExpenseAction,
): ExpenseState => {
	switch (action.type) {
		case "ADD_EXPENSE":
			return { ...state, expenses: [...state.expenses, action.payload] };
		case "DELETE_EXPENSE":
			return {
				...state,
				expenses: state.expenses.filter((item) => item.id !== action.payload),
			};
		case "EDIT_EXPENSE":
			return {
				...state,
				expenses: state.expenses.map((item) =>
					item.id === action.payload.id ? action.payload : item,
				),
			};
		case "SET_FILTER":
			return {
				...state,
				expenses: state.expenses.filter(
					(item) => item.category === action.payload,
				),
			};
		default:
			return state;
	}
};

// create context
const ExpenseContext = createContext<{
	state: ExpenseState;
	dispatch: React.Dispatch<ExpenseAction>;
} | null>(null);

// Provide context
export const ExpenseProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer(expenseReducer, initialState);

	return (
		<ExpenseContext.Provider value={{ state, dispatch }}>
			{children}
		</ExpenseContext.Provider>
	);
};

// custom hool

export const useExpenseContext = () => {
	const context = useContext(ExpenseContext);
	if (!context) {
		throw new Error(
			"useExpense Context must be used withingan ExpenseProvider",
		);
	}
	return context;
};
