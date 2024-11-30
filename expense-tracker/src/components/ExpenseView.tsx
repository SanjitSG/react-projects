import { useExpenseContext } from "../context/ExpenseContext";

const ExpenseView = () => {
	const { state } = useExpenseContext();
	return (
		<div className="container mx-auto p-4">
			{state.expenses.length === 0 ? (
				<p>No expenses found</p>
			) : (
				<div>{state.expenses[0].title}</div>
			)}
		</div>
	);
};

export default ExpenseView;
