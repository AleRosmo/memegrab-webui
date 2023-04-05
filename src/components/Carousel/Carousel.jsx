import React, { useEffect, useState } from "react";
import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";

export default function Carousel({ initialImages, ModService }) {
	const [currentImage, setCurrentImage] = useState(0);
	const [images, setImages] = useState(initialImages);
	const totalImages = images.length;

	const refs = images.reduce((accumulator, currentValue, index) => {
		accumulator[index] = React.createRef(currentValue);
		return accumulator;
	}, {});

	const scrollToImage = (imageIndex) => {
		setCurrentImage(imageIndex);
		refs[imageIndex].current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
	};

	const nextImage = () => {
		if (currentImage >= totalImages - 1) {
			scrollToImage(0);
		} else {
			scrollToImage(currentImage + 1);
		}
	};

	const previousImage = () => {
		if (currentImage === 0) {
			scrollToImage(totalImages - 1);
		} else {
			scrollToImage(currentImage - 1);
		}
	};

	// Tailwind styles. Most importantly notice position absolute, this will sit relative to the carousel's outer div.
	const arrowStyle =
		"absolute block text-white text-2xl z-10 bg-black h-10 w-10 rounded-full opacity-75 flex items-center justify-center";

	// Let's create dynamic buttons. It can be either left or right. Using
	// isLeft boolean we can determine which side we'll be rendering our button
	// as well as change its position and content.
	const sliderControl = (isLeft) => (
		<button
			type='button'
			onClick={isLeft ? previousImage : nextImage}
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

	const approvalButton = (action, id) => (
		<button
			type='button'
			onClick={action ? setApproved(true, id) : setApproved(false, id)}
			className='bg-white p-4 border rounded-full hover:opacity-50'>
			{action ? (
				<AiOutlineCheck size={36} color='green' />
			) : (
				<AiOutlineClose size={36} color='red' />
			)}
		</button>
	);

	const setApproved = (approved, id) =>
		approved
			? () => {
					ModService.review(id, true);
					// setImages(
					// 	images.map((image) =>
					// 		image.id === id ? { ...image, approved: true } : image
					// 	)
					// );
			  }
			: () => {
					ModService.review(id, false);
			  };

	useEffect(() => {
		const keyboardEvent = (e) => {
			if (e.key === "ArrowRight") {
				nextImage();
			}
			if (e.key === "ArrowLeft") {
				previousImage();
			}
		};
		window.addEventListener("keydown", keyboardEvent, false);

		return () => {
			window.removeEventListener("keydown", keyboardEvent);
		};
	}, [nextImage, previousImage]);

	return (
		<div className='relative p-12 flex justify-center items-center w-full md:w-1/2'>
			<div
				className='inline-flex overflow-x-hidden snap-x snap-mandatory'
				style={{
					WebkitOverflowScrolling: "touch",
					scrollbarWidth: "none",
					msOverflowStyle: "none",
				}}>
				{sliderControl(true)}
				{images.map((img, i) => (
					<div className='w-full flex-shrink-0' key={img.url} ref={refs[i]}>
						<img src={img.url} className='w-full object-contain' />
						<div className='w-full flex justify-around'>
							{approvalButton(true, img.id)}
							{approvalButton(false, img.id)}
						</div>
					</div>
				))}
				{sliderControl()}
			</div>
		</div>
	);
}
