import { useTaskContext } from "@/context/TaskContext";
import TodoItem from "./TodoItem";

const TodoList: React.FC = () => {
	const { state, dispatch } = useTaskContext();

	return (
		<div className="container mx-auto p-2 text-center">
			{state.tasks.length === 0 ? (
				<p>No Tasks avaiable</p>
			) : (
				<ul>
					{state.tasks.map((task) => (
						<TodoItem key={task.id} task={task} dispatch={dispatch} />
					))}
				</ul>
			)}
		</div>
	);
};

export default TodoList;
