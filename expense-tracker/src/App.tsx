import DateComponent from "./components/DateComponent";
import Gallery from "./components/Gallery";
import Toolbar from "./components/Toolbar";

const App = () => {
	return (
		<div className="container max-w-screen-sm w-full mx-auto p-4 h-screen">
			<Toolbar
				onPlayMovie={() => alert("Playing")}
				onUploadVideo={() => alert("Uploading")}
			/>
			{/* <DateComponent /> */}
			<Gallery />
		</div>
	);
};

export default App;
