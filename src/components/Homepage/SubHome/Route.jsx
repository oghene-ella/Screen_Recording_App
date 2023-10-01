import edit from "../../../assets/icons/edit.svg"
import {Link} from "react-router-dom"
const Route = () => {
  return (
		<section className="flex justify-center">
			<main className="w-11/12 flex flex-col gap-8">
				<Link to="/home" className="font-work_sans text-dark_black opacity-70">Home / Recent Videos / How To Create A Facebook Ad Listing </Link>

				<section className="flex gap-10 sm:gap-5">
					<h2 className="text-dark_black font-sora text-xl sm:text-2xl font-medium">How To Create A Facebook Ad Listing </h2>
                    <img src={edit} />
				</section>
			</main>
		</section>
	);
}

export default Route