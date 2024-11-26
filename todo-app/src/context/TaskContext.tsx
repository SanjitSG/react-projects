import type React from "react";
import { type ReactNode, createContext, useContext, useReducer } from "react";

// Define types for Task and State
export interface Task {
	id: number;
	text: string;
	completed: boolean;
}

interface TaskState {
	tasks: Task[];
}

export type TaskAction =
	| { type: "ADD_TASK"; payload: Task }
	| { type: "TOGGLE_TASK"; payload: number }
	| { type: "DELETE_TASK"; payload: number };

// Initial state
const initialState: TaskState = { tasks: [] };

// Reducer function
const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
	switch (action.type) {
		case "ADD_TASK":
			return { tasks: [...state.tasks, action.payload] };
		case "TOGGLE_TASK":
			return {
				tasks: state.tasks.map((task) =>
					task.id === action.payload
						? { ...task, completed: !task.completed }
						: task,
				),
			};
		case "DELETE_TASK":
			return {
				tasks: state.tasks.filter((task) => task.id !== action.payload),
			};
		default:
			return state;
	}
};

// Task context
const TaskContext = createContext<
	| {
			state: TaskState;
			dispatch: React.Dispatch<TaskAction>;
	  }
	| undefined
>(undefined);

export const TaskProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [state, dispatch] = useReducer<React.Reducer<TaskState, TaskAction>>(
		taskReducer,
		initialState,
	);

	return (
		<TaskContext.Provider value={{ state, dispatch }}>
			{children}
		</TaskContext.Provider>
	);
};

export const useTaskContext = () => {
	const context = useContext(TaskContext);
	if (!context) {
		throw new Error("useTaskContext must be used within a TaskProvider");
	}
	return context;
};
