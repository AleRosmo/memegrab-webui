import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Carousel from "../../components/Carousel/Carousel";
import AuthService from "../../services/auth.service";
import ModService from "../../services/mod.service";

export default function ContentMod({ info }) {
	// Check if logged in
	const navigate = useNavigate();
	useEffect(() => {
		AuthService.validate().catch(() => {
			navigate("/login");
		});
	}, [navigate]);

	const [images, setImages] = useState([]);

	// const checkImgExist = (url) => {
	// 	axios.get(url).then((res) => {
	// 		if (res.statusCode === 200) {
	// 			return true;
	// 		}
	// 		return false;
	// 	});
	// };
	
	const setApproved = (id, approved) => {
		ModService.review(id, approved);
		setImages(images.filter((image) => image.id !== id));
	};
	
	useEffect(() => {
		axios.get(info.url, { withCredentials: true }).then((response) =>
			setImages(
				response.data.map((imageData) => {
					return { url: `/img/${imageData.file_name}`, id: imageData.id };
				})
			)
		);
		return () => {setImages([])};
	}, []);

	return (
		<div className='w-full flex flex-col justify-center items-center'>
			<Carousel images={images} setApproved={setApproved} />
		</div>
	);
}
