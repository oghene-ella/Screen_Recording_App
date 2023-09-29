import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage.jsx";
import Home from "./pages/Home.jsx";
import Login from "./pages/Login.jsx"
import Popup from "./components/popup/popup.jsx"
import { AuthContextProvider } from "./context/AuthContext.jsx";
// import NotFound from "./pages/NotFound.jsx";

const App = () => {
	return (
		<AuthContextProvider>
			<Routes>
				<Route path="/" element={<LandingPage />} />
				<Route path="/home" element={<Home />} />
				<Route path="/pop" element={<Popup />} />
				<Route path="/login" index element={<Login />} />
				{/* <Route path="*" element={<NotFound />} /> */}
			</Routes>
		</AuthContextProvider>
	);
};

export default App;
