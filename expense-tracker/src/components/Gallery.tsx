import Avatar from "./Avatar";
import Items from "./Items";

const Gallery = () => {
	return (
		<div className="container max-w-screen-md h-screen shadow-lg m-2 p-2">
			<h1>Nobel scientists</h1>
			<section className="profile">
				<Items />
			</section>
		</div>
	);
};

export default Gallery;
