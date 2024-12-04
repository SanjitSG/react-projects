import React from "react";

const people = [
	"Creola Katherine Johnson: mathematician",
	"Mario José Molina-Pasquel Henríquez: chemist",
	"Mohammad Abdus Salam: physicist",
	"Percy Lavon Julian: chemist",
	"Subrahmanyan Chandrasekhar: astrophysicist",
];

const Items = () => {
	const listItems = people.map((person) => <li key={person}>{person}</li>);

	return (
		<div>
			<ol>{listItems}</ol>
		</div>
	);
};

export default Items;
