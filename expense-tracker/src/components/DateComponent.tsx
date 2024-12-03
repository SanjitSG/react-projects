import { useEffect, useState } from "react";
const DateComponent = () => {
	const [color, setColor] = useState("");
	const [date, setDate] = useState(new Date());
	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(new Date());
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="text-black font-bold p-4 mx-auto shadow-xl rounded-lg">
			<label htmlFor="color">Pick a color: </label>
			<select
				name="color"
				id="color"
				defaultValue="lightcorol"
				onChange={(e) => setColor(e.target.value)}
				className="px-3"
			>
				<option value="#e74c3c">lightcorol</option>
				<option value="#1a5276">midnight blue</option>
				<option value="#1d8348">green</option>
			</select>

			<div
				style={{ backgroundColor: `${color}` }}
				className="mt-3 p-4 rounded-lg shadow-lg text-amber-200"
			>
				<p>{date.toLocaleTimeString()}</p>
			</div>
		</div>
	);
};

export default DateComponent;
