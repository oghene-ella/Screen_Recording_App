import { useState } from "react";
import { auth } from "../../config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [errorMessage, setErrorMessage] = useState("");
	const navigate = useNavigate();

	const logIn = (e) => {
		e.preventDefault();

		if (!username || !password) {
			setErrorMessage("Please enter both username and password.");
			return;
		}

		signInWithEmailAndPassword(auth, username, password)
			.then((userInfo) => {
				console.log(userInfo);
				navigate("/home");
			})
			.catch((error) => {
				console.log(error);
				navigate("/");
				setErrorMessage("Oops! Wrong Details! Try Again!");
			});
	};

	return (
		<form className="flex flex-col gap-8" onSubmit={logIn}>
			{/* email input */}
			<span className="flex flex-col gap-4">
				<label className="font-work_sans text-dark_black">Email</label>
				<input
					type="email"
					placeholder="Enter your email address: admin@admin.com"
					className="py-3 px-5 border border-border rounded-lg placeholder:text-text placeholder:font-work_sans "
					value={username}
					onChange={(e) => setUsername(e.target.value)}
				/>
			</span>

			{/* password input */}
			<span className="flex flex-col gap-4">
				<label className="font-work_sans text-dark_black">Password</label>
				<input
					type="password"
					placeholder="Enter your Password: admin01"
					className="py-3 px-5 border border-border rounded-lg placeholder:text-text placeholder:font-work_sans "
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
			</span>

			<p className="text-red-500 font-semibold">{errorMessage}</p>

			<button className="bg-dark_blue text-white py-4 rounded-lg font-work_sans font-light text-xl">
				Sign Up
			</button>
		</form>
	);
};

export default SignUp;
