import logo from "../../assets/logo.svg"
import { Link} from "react-router-dom";


const Navbar = () => {

    return (
			<nav className="w-full h-fit p-5 border-2 border-t-0 border-l-0 border-r-0 border-b-slate-200 flex justify-center">
				<main className="w-11/12 flex items-center justify-between">
					<span className="flex gap-3 items-center font-inter">
						<Link to="/" className="flex gap-3 items-center ">
							<img src={logo} />
							<p className="text-dark_blue font-semibold text-base">
								HelpMeOut
							</p>
						</Link>
					</span>

					<span className="hidden font-work_sans text-black font-light sm:flex sm:gap-10">
						<Link to="/features">Features</Link>
						<Link to="/works">How It Works</Link>
					</span>

					<Link
						to="/login"
						className="font-sora text-dark_blue font-semibold text-lg"
					>
						Get Started
					</Link>
				</main>
			</nav>
		);
}

export default Navbar