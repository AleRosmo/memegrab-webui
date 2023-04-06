import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

// Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
const arrowStyle =
	"absolute block text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";
	
export default function ArrowButton({ isLeft, action }) {
	return (
		<button
			type='button'
			onClick={action}
			className={`${arrowStyle} ${isLeft ? "left-2" : "right-2"}`}
			style={{ top: "40%" }}>
			<span role='img' aria-label={`Arrow ${isLeft ? "left" : "right"}`}>
				{isLeft ? (
					<BsFillArrowLeftCircleFill />
				) : (
					<BsFillArrowRightCircleFill />
				)}
			</span>
		</button>
	);
}
