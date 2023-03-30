import React, { useEffect } from "react";
import { BiLogOut } from "react-icons/bi";
import { Route, useNavigate } from "react-router-dom";
import AuthService from "../../services/auth.service";
import Avatar from "../Avatar";
const style =
	"h-20 px-2 py-2 bg-gray-600 text-blue-400 font-extrabold flex flex-row justify-between items-center";

// const handleLogout = () => {
// 	axios.get("/auth/logout").then((res) => {
// 		localStorage.clear();
// 		window.location.href = "/auth/login";
// 	});
// };

export default function ProfileBox(props) {
	const navigate = useNavigate();
	useEffect(() => {
		console.log(props);
	}, []);

	return (
		<div className={style}>
			{/* <Avatar src={props.avatar} /> */}
			<Avatar src={"pp.png"} />
			<h3 className='mr-4'>{"Nig"}</h3>
			<BiLogOut
				className='cursor-pointer'
				onClick={() => {
					AuthService.logout().then(navigate("/login"));
				}}
			/>
			``
		</div>
	);
}
