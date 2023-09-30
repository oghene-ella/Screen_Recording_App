import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Login from "./pages/Login.jsx"
import Popup from "./components/popup/popup.jsx"
import HomePage from "./pages/HomePage.jsx";
import SubHome from "./components/Homepage/SubHome/Index.jsx"
// import NotFound from "./pages/NotFound.jsx";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/pop" element={<Popup />} />
			<Route path="/login" index element={<Login />} />
			<Route path="/home" index element={<HomePage />} />
			<Route path="/home/1" index element={<SubHome />} />
			{/* <Route path="*" element={<NotFound />} /> */}
		</Routes>
	);
};

export default App;
