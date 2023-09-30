import videoFrame from "../../../assets/icons/videoframe1.svg";

import whatsapp from "../../../assets/icons/whatsapp.svg";
import facebook from "../../../assets/icons/fb.svg"
import telegram from "../../../assets/icons/telegram.svg"

const ListDetails = () => {
  return (
		<section className="py-10 flex justify-center">
			<main className="w-11/12 flex flex-col gap-12">
				<section className="w-full h-full border border-gray-300 rounded-2xl p-4 relative">
					<img src={videoFrame} className="bg-cover" />
					<p className="rounded-md font-work_sans text-dark_blue absolute bottom-7 right-7 px-5 py-2 bg-time_label bg-cover">
						00:34
					</p>
				</section>

				<section className="border border-red-500">
					<section>
                        <span></span>
                    </section>

					<section className="flex flex-col gap-3">
						<h1 className="font-work_sans text-dark_blue">Share your video</h1>

						{/* SOCIAL MEDIA LINK */}
						<section className="w-fit flex flex-col md:flex-row gap-5">
							{/* facebook */}
							<span className="flex gap-3 border border-dark_black px-5 py-2 rounded-md">
								<img src={facebook} />
								<p>Facebook</p>
							</span>

							{/* whatsapp */}
							<span className="flex gap-3 border border-dark_black px-5 py-2 rounded-md">
								<img src={whatsapp} />
								<p>WhatsApp</p>
							</span>

							{/* telegram */}
							<span className="flex gap-3 border border-dark_black px-5 py-2 rounded-md">
								<img src={telegram} />
								<p>Telegram</p>
							</span>
						</section>
					</section>
				</section>
			</main>
		</section>
	);
}

export default ListDetails