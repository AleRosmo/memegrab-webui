import React, { useEffect, useState } from "react";

import ApprovalButton from "./ApprovalButton/ApprovalButton";
import ArrowButton from "./ArrowButton/ArrowButton";

export default function Carousel({ images, setApproved }) {
	const [currentImage, setCurrentImage] = useState(0);

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
				<ArrowButton isLeft={true} action={previousImage} />
				{images.map((img, i) => (
					<div className='w-full flex-shrink-0' key={img.url} ref={refs[i]}>
						<img src={img.url} className='w-full object-contain' />
						<div className='w-full flex justify-around'>
							<ApprovalButton
								action={true}
								id={img.id}
								setApproved={setApproved}
								nextImage={nextImage}
							/>
							<ApprovalButton
								action={false}
								id={img.id}
								setApproved={setApproved}
								nextImage={nextImage}
							/>
						</div>
					</div>
				))}
				<ArrowButton isLeft={false} action={nextImage} />
			</div>
		</div>
	);
}
