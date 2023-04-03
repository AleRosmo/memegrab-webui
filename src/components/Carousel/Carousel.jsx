import React, { useState } from "react";
import {
	AiFillCheckCircl,
	AiOutlineCheck,
	AiOutlineClose,
} from "react-icons/ai";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "../../components/basic/Container/Container";
import AuthService from "../../services/auth.service";

export default function Carousel({ images }) {
	const [currentImage, setCurrentImage] = useState(0);

	const refs = images.reduce((acc, val, i) => {
		acc[i] = React.createRef();
		return acc;
	}, {});

	const scrollToImage = (i) => {
		setCurrentImage(i);
		refs[i].current.scrollIntoView({
			behavior: "smooth",
			block: "nearest",
			inline: "start",
		});
	};

	const totalImages = images.length;

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

	const scrollLeft = () => {
		let scrollContainer = document.getElementById("scroll-container");
		console.log(scrollContainer.scrollLeft);
		scrollContainer.scrollLeft -= 750;
		console.log(scrollContainer.scrollLeft);
	};

	const scrollRight = () => {
		let scrollContainer = document.getElementById("scroll-container");
		console.log(scrollContainer.scrollLeft);
		scrollContainer.scrollLeft += 750;
		console.log(scrollContainer.scrollLeft);
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

	const setApproved = (approved) => {
		{
			// approved ? () => {} : () => {};
		}
	};

	const approvalButton = (isApproved) => (
		<button
			type='button'
			onClick={isApproved ? setApproved(true) : setApproved(false)}
			className='bg-white p-4 border rounded-full hover:opacity-50'>
			{isApproved ? (
				<AiOutlineCheck size={36} color='green' />
			) : (
				<AiOutlineClose size={36} color='red' />
			)}
		</button>
	);

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
					<div className='w-full flex-shrink-0' key={img} ref={refs[i]}>
						<img src={img} className='w-full object-contain' />
						<div className='w-full flex justify-around'>
							{approvalButton(true)}
							{approvalButton(false)}
						</div>
					</div>
				))}
				{sliderControl()}
			</div>
		</div>
	);
}
