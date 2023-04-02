import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
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

	const loadContent = () => {
		axios.get(info.url, { withCredentials: true }).then((response) => {
			const dataMap = response.data.map((item) => {
				const url = `http://localhost:8080/img/${item.file_name}`;
				// const exists = checkImgExist(url);
				// if (exists) {
				return (
					<div key={item.id} id={item.id} className='flex flex-row snap-center'>
						<img key={item.file_name} className='max-w-xl' src={url} />
					</div>
				);
			});
			setData(dataMap);
		});
	};

	useEffect(() => {
		loadContent();
		window.addEventListener("keydown", (e) => {
			if (e.key === "ArrowRight") {
				// nextPost();
			}
			if (e.key === "ArrowLeft") {
				// prevPost();
			}
		});
	}, []);

	return (
		<div className='w-full h-screen flex flex-col'>
			<div className='flex flex-row items-center justify-center overflow-scroll snap-x snap-mandatory gap-20'>
				{data}
			</div>
			<div className='mb-auto' />
			<div className='relative w-full'>
				<Container>
					<div className='flex flex-row items-center justify-around'>
						<button>
							<BsFillArrowLeftCircleFill color='white' size='24' />
						</button>
						<button>
							<MdCancel color='white' size='24' />
						</button>
						<button>
							<AiFillCheckCircle color='white' size='24' />
						</button>
						<button>
							<BsFillArrowRightCircleFill color='white' size='24' />
						</button>
					</div>
				</Container>
			</div>
		</div>
	);
}
