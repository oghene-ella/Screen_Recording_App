import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx"
import Popup from "./components/popup/popup.jsx"
import HomePage from "./pages/HomePage.jsx";
import SubHome from "./components/Homepage/SubHome/Index.jsx";
import Ready from "./pages/Ready.jsx"
import Features from "./components/LandingPage/Features.jsx";
import Works from "./components/LandingPage/Works.jsx"
import RecordSession from "./components/RecordSession.jsx"
import NotFound from "./pages/NotFound.jsx";


import { useNavigate } from "react-router-dom";

const App = () => {
	const navigate = useNavigate();

	const goToHome = () => {
		navigate("/");
	};

	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/features" element={<Features goToHome={goToHome} />} />
			<Route path="/works" element={<Works goToHome={goToHome} />} />
			<Route path="/record" element={<RecordSession />} />
			<Route path="/pop" element={<Popup />} />
			<Route path="/login" exact element={<Login />} />
			<Route
				path="/home"
				exact
				element={<HomePage />}
			/>
			<Route path="/home/1" exact element={<SubHome />} />
			<Route path="/ready" exact element={<Ready />} />
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default App;
