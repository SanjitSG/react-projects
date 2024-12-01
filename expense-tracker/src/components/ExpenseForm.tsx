import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { type Expense, useExpenseContext } from "../context/ExpenseContext";
import { Button } from "./ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "./ui/form";
import { Input } from "./ui/input";

const formSchema = z.object({
	id: z.coerce.number().min(1, "ID must be greater than 0"),
	title: z.string().min(1, "Title is required"),
	description: z.string().optional(),
	category: z.string().min(1, "Category is required"),
	amount: z.coerce.number().min(0, "Amount must be a positive number"),
});

export default function ExpenseForm() {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			id: 1,
			title: "",
			description: undefined,
			category: "",
			amount: 0,
		},
	});

	const { dispatch } = useExpenseContext();
	function onSubmit(values: z.infer<typeof formSchema>) {
		// dispatch an action to store the values into expense array
		const newExpense = values as Expense;
		dispatch({ type: "ADD_EXPENSE", payload: newExpense });
	}

	return (
		<div className="max-w-96 border border-black p-4 rounded-lg shadow flex-shrink-0 ">
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="id"
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel>ID</FormLabel>
								<FormControl>
									<Input placeholder="ID" {...field} />
								</FormControl>
								{fieldState.error && (
									<p className="text-red-500 text-sm">
										{fieldState.error.message}
									</p>
								)}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="title"
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Title" {...field} />
								</FormControl>
								{fieldState.error && (
									<p className="text-red-500 text-sm">
										{fieldState.error.message}
									</p>
								)}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input placeholder="Description" {...field} />
								</FormControl>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="category"
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<FormControl>
									<Input placeholder="Category" {...field} />
								</FormControl>
								{fieldState.error && (
									<p className="text-red-500 text-sm">
										{fieldState.error.message}
									</p>
								)}
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="amount"
						render={({ field, fieldState }) => (
							<FormItem>
								<FormLabel>Amount</FormLabel>
								<FormControl>
									<Input placeholder="Amount" {...field} />
								</FormControl>
								{fieldState.error && (
									<p className="text-red-500 text-sm">
										{fieldState.error.message}
									</p>
								)}
							</FormItem>
						)}
					/>
					<Button type="submit">Submit</Button>
				</form>
			</Form>
		</div>
	);
}
