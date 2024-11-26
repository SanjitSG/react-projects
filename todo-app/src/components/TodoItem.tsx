import type { Task, TaskAction } from "@/context/TaskContext";
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

interface TodoItemProps {
	task: Task;
	dispatch: React.Dispatch<TaskAction>;
}

const TodoItem: React.FC<TodoItemProps> = ({ task, dispatch }) => {
	const handleToggle = (checked: boolean) => {
		dispatch({
			type: "TOGGLE_TASK",
			payload: task.id,
		});
	};
	const handleDelete = () => {
		dispatch({
			type: "DELETE_TASK",
			payload: task.id,
		});
	};
	return (
		<li className="flex flex-1 justify-between p-2 items-center">
			<Checkbox checked={task.completed} onCheckedChange={handleToggle} />

			<span className="flex-grow max-w-60 text-xl font-semibold text-center  truncate">
				{task.text}
			</span>
			<Button onClick={handleDelete} variant="outline" size="sm">
				Delete Task
			</Button>
		</li>
	);
};

export default TodoItem;
