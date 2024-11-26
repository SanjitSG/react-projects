import {
	type Task,
	type TaskAction,
	useTaskContext,
} from "@/context/TaskContext";
import type React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const AddTodo: React.FC = () => {
	const { dispatch } = useTaskContext();
	const [taskText, setTaskText] = useState("");
	const handleAddTask = () => {
		if (taskText.trim() === "") return;

		const newTask: Task = {
			id: Date.now(),
			text: taskText,
			completed: false,
		};

		dispatch({ type: "ADD_TASK", payload: newTask });
		setTaskText("");
	};
	return (
		<div className="container mx-auto p-2 space-y-3">
			<Input
				type="text"
				value={taskText}
				onChange={(e) => {
					setTaskText(e.target.value);
				}}
				placeholder="Enter a task"
			/>
			<Button onClick={handleAddTask} size="sm">
				Add Task
			</Button>
		</div>
	);
};

export default AddTodo;
