import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const Home = () => {
	const context = useContext(ThemeContext);
	if (!context)
		throw new Error("MainContent must be used within a ThemeProvider");
	const { theme, toggleTheme } = context;

	return (
		<div
			className="container mx-auto h-screen p-4"
			style={{
				background: theme === "light" ? "#fff" : "#333",
				color: theme === "light" ? "#333" : "#fff",
			}}
		>
			rte
			<Card className="h-28 w-28 p-4 m-4">Merry Christmas</Card>
			<Button onClick={toggleTheme}>Update theme</Button>
		</div>
	);
};

export default Home;
