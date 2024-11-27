import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { Card } from "./components/ui/card";
import { TaskProvider } from "./context/TaskContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";

const App = () => {
	return (
		<div className="container mx-auto max-w-md">
			<TaskProvider>
				<div className="text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
					Todo App
				</div>
				<div className="mt-7">
					<Card className="p-2 mb-2">
						<AddTodo />
					</Card>
					<Card>
						<TodoList />
					</Card>
				</div>
			</TaskProvider>
			<ThemeProvider>
				<Home />
			</ThemeProvider>
		</div>
	);
};

export default App;
