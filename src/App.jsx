import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import NotFound from "./pages/NotFound.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			{/* <Route path="/home" index element={<Home />} /> */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
