import ExpenseForm from "./components/ExpenseForm";
import ExpenseView from "./components/ExpenseView";
import { ExpenseProvider } from "./context/ExpenseContext";

function App() {
	return (
		<ExpenseProvider>
			<div className="container mx-auto max-w-sm p-3">
				<ExpenseForm />
				<ExpenseView />
			</div>
		</ExpenseProvider>
	);
}

export default App;
