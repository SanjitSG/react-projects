import ExpenseForm from "./components/ExpenseForm";
import Form from "./components/Form";
import { ExpenseProvider } from "./context/ExpenseContext";

function App() {
	return (
		<ExpenseProvider>
			<div className="container mx-auto max-w-sm p-3">
				<ExpenseForm />
			</div>
		</ExpenseProvider>
	);
}

export default App;
