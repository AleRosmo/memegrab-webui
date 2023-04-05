import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import AuthService from "../../services/auth.service";
import ModService from "../../services/mod.service";

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

	const loadContent = () => {
		axios.get(info.url, { withCredentials: true }).then((response) => {
			const urlMap = response.data.map((imageData) => {
				return {
					url: `/img/${imageData.file_name}`,
					// alt: imageData.file_name,
					id: imageData.id,
				};
			});
			setImages(urlMap);
		});
	};

	useEffect(() => {
		loadContent();
		return () => {
			setImages([]);
		};
	}, []);

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<Carousel initialImages={images} ModService={ModService} />
		</div>
	);
}
