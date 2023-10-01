import { useState, useEffect } from "react";
import { auth } from "../config/firebase.js";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const LoginAuthentication = () => {
	const [authUser, setAuthUser] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		const authChange = onAuthStateChanged(auth, (user) => {
			if (user) {
				setAuthUser(user);
				navigate("/home");
			} else {
				setAuthUser(null);
				navigate("/login");
			}
		});

		return () => {
			authChange();
		};
	}, []);

	const userSignOut = () => {
		signOut(auth)
			.then(() => {
				console.log("User signed out");
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<section>
			{authUser ? (
				<section className="flex flex-col items-center gap-5 font-mooli_sans">
					<p className="text-base">{`Logged In as ${authUser.email}`}</p>
					<button
						onClick={userSignOut}
						className="bg-dark_blue text-white px-4 py-2 w-1/2 rounded-lg hover:bg-dark_blue hover:opacity-80"
					>
						Sign Out
					</button>
				</section>
			) : (
				<>
					<p>Logged Out</p>
				</>
			)}
		</section>
	);
};

export default LoginAuthentication;
