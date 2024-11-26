import type React from "react";
import { createContext, useState } from "react";

type ThemeContextType = {
	theme: "light" | "dark";
	toggleTheme: () => void;
};

//context
export const ThemeContext = createContext<ThemeContextType | undefined>(
	undefined,
);

//context provider
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [theme, setTheme] = useState<"light" | "dark">("light");

	const toggleTheme = () => {
		setTheme((prev) => (prev === "light" ? "dark" : "light"));
	};

	return (
		<ThemeContext.Provider value={{ theme, toggleTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
