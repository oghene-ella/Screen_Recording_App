import  { useState } from "react";
import timer from "../assets/icons/timer.svg"
import menu from "../assets/icons/controls.svg"

const RecordSession = () => {
	
	const [isDragging, setIsDragging] = useState(false);
	const [position, setPosition] = useState({ x: 0, y: 0 });

	const handleMouseDown = (e) => {
		setIsDragging(true);
		const initialX = e.clientX - position.x;
		const initialY = e.clientY - position.y;

		const handleMouseMove = (e) => {
			const newX = e.clientX - initialX;
			const newY = e.clientY - initialY;
			setPosition({ x: newX, y: newY });
		};

		const handleMouseUp = () => {
			setIsDragging(false);
			window.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("mouseup", handleMouseUp);
		};

		window.addEventListener("mousemove", handleMouseMove);
		window.addEventListener("mouseup", handleMouseUp);
	};

	return (
		<section className="w-full flex justify-center items-end">
			<main
				className={`border-8 border-zinc-200 w-1/2 h-[7rem] rounded-full bg-dark_black px-5 py-5 text-white flex gap-10 items-center draggable-element ${
					isDragging ? "dragging" : ""
				}`}
				style={{ left: `${position.x}px`, top: `${position.y}px` }}
				onMouseDown={handleMouseDown}
			>
				<img src={timer} />
				<img src={menu} />
			</main>
		</section>
	);
};

export default RecordSession;
