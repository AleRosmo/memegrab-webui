import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import AuthService from "../../services/auth.service";

export default function ContentMod({ info }) {
	const navigate = useNavigate();
	// Check if logged in
	useEffect(() => {
		AuthService.validate().catch(() => {
			navigate("/login");
		});
	}, [navigate]);

	// const checkImgExist = (url) => {
	// 	axios.get(url).then((res) => {
	// 		if (res.statusCode === 200) {
	// 			return true;
	// 		}
	// 		return false;
	// 	});
	// };

	const [images, setImages] = useState([]);

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
			const urlMap = response.data.map((item) => {
				return `/img/${item.file_name}`;
			});
			setImages(urlMap);
		});
	};

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<Carousel images={images} />
		</div>
	);
}
