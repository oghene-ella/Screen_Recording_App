import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx"
import NotFound from "./pages/NotFound.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/login" index element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
