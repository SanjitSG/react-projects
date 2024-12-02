import { useState } from "react";
import { Button } from "./ui/button";

interface Props {
	onPlayMovie: () => void;
	onUploadVideo: () => void;
}

const Toolbar: React.FC<Props> = ({ onPlayMovie, onUploadVideo }) => {
	const [text, setText] = useState("");
	return (
		<div className="p-3 w-80 flex justify-center gap-3">
			<Button onClick={onPlayMovie}>Play Movie</Button>
			<Button onClick={onUploadVideo}>Upload Movie</Button>
			<input
				className="px-3 border shadow-lg rounded-md outline-none"
				type="text"
				onChange={(e) => {
					setText(e.target.value);
				}}
				value={text}
				placeholder="Text"
			/>

			<p>{text}</p>
		</div>
	);
};

export default Toolbar;
