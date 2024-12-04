import React from "react";

const Avatar = ({ img, desc }) => {
	return (
		<div className="container w-80 h-60 shadow-lg rounded-md p-4 ">
			<img src={img} alt={desc} />
			<h2>{desc}</h2>
		</div>
	);
};

export default Avatar;
