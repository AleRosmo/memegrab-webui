import axios from "axios";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import {
	BsFillArrowLeftCircleFill,
	BsFillArrowRightCircleFill,
} from "react-icons/bs";
import { MdCancel } from "react-icons/md";
import { Navigate, useNavigate } from "react-router-dom";
import Container from "../../components/basic/Container/Container";
import AuthService from "../../services/auth.service";

export default function ContentMod({ info }) {
	// Check if logged in
	// useEffect(() => {
	// 	AuthService.validate().catch(() => {
	// 		navigate("/login");
	// 	});
	// }, [navigate]);

	const navigate = useNavigate();
	const [data, setData] = useState([]);

	// const checkImgExist = (url) => {
	// 	axios.get(url).then((res) => {
	// 		if (res.statusCode === 200) {
	// 			return true;
	// 		}
	// 		return false;
	// 	});
	// };

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

	useEffect(() => {
		loadContent();
		const keyboardEvent = (e) => {
			if (e.key === "ArrowRight") {
				// nextPost();
			}
			if (e.key === "ArrowLeft") {
				// prevPost();
			}
		};
		window.addEventListener("keydown", keyboardEvent, false);

		return () => {
			window.removeEventListener("keydown", keyboardEvent);
		};
	}, []);

	const loadContent = () => {
		axios.get(info.url, { withCredentials: true }).then((response) => {
			const dataMap = response.data.map((item) => {
				const url = `http://localhost:8080/img/${item.file_name}`;
				// const exists = checkImgExist(url);
				// if (exists) {
				return (
					<li key={item.id} id={item.id} className='snap-center block'>
						<img key={item.file_name} className='max-w-xl' src={url} />
					</li>
				);
			});
			setData(dataMap);
		});
	};

	return (
		<div className='w-full h-screen flex flex-col overflow-hidden'>
			{/* Carousel wrapper */}
			<div
				className='relative flex flex-row w-full h-full overflow-hidden rounded-lg'
				id='scroll-container'>
				{data}
			</div>
			{/* */}
			<div
				className='flex flex-row items-center justify-center \
				overflow-scroll snap-x snap-mandatory'></div>
			<div className='mb-auto' />
			<div className='relative w-full'>
				<Container>
					<div className='flex flex-row items-center justify-around'>
						<button onClick={scrollLeft}>
							<BsFillArrowLeftCircleFill color='white' size='24' />
						</button>
						<button>
							<MdCancel color='white' size='24' />
						</button>
						<button>
							<AiFillCheckCircle color='white' size='24' />
						</button>
						<button onClick={scrollRight}>
							<BsFillArrowRightCircleFill color='white' size='24' />
						</button>
					</div>
				</Container>
			</div>
		</div>
	);
}
