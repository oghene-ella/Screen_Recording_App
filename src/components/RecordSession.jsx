import  { useState } from "react";

const RecordSession = () => {
	const [isDragging, setIsDragging] = useState(false);
	const [draggedItem, setDraggedItem] = useState(null);

	const dragStart = (e) => {
		setIsDragging(true);
		setDraggedItem(e.target);
	};

	const dragEnter = (e) => {
		e.preventDefault();
		if (!isDragging) return;
		e.target.style.backgroundColor = "lightgray";
	};

	const dragLeave = (e) => {
		e.target.style.backgroundColor = "";
	};

	const drop = (e) => {
		e.preventDefault();
		e.target.style.backgroundColor = "";
		if (!draggedItem) return;

		// Swap the positions of the dragged item and the target item
		const container = e.target.parentElement;
		const items = Array.from(container.children);
		const draggedIndex = items.indexOf(draggedItem);
		const targetIndex = items.indexOf(e.target);

		if (draggedIndex !== -1 && targetIndex !== -1) {
			// Insert the dragged item before the target item
			if (draggedIndex < targetIndex) {
				container.insertBefore(draggedItem, e.target.nextSibling);
			} else {
				container.insertBefore(draggedItem, e.target);
			}

			setDraggedItem(null);
			setIsDragging(false);
		}
	};

	return (
		<section className="w-full flex justify-center">
			<main
				className="border-8 border-zinc-200 w-1/2 h-[7rem] rounded-full bg-dark_black px-5 py-5 text-white"
				draggable
				onDragStart={dragStart}
				onDragEnter={dragEnter}
				onDragLeave={dragLeave}
				onDrop={drop}
			>
				<h1>Hello</h1>
			</main>
		</section>
	);
};

export default RecordSession;
