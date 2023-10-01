import Line from "../components/Homepage/Line"
import Header from "../components/Homepage/Header"
import Search from "../components/Homepage/Search"
import Video from "../components/Homepage/Video"
import Authentication from "../components/Authentication"

const HomePage = () => {
	return (
		<section>
			<Line />
			<Header />
			<Search />
			<Line />
			<Video />
			<Authentication />
		</section>
	);
};

export default HomePage