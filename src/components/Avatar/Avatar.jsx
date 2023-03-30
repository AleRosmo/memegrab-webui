import React from "react";
import { FaWrench } from "react-icons/fa";
const style = "";

export default function Avatar({ src, size }) {
	const [hover, setHover] = React.useState(false);

	const SettingsButton = (props) => {
		return (
			<button className='invisible hover:visible'>
				<FaWrench />
			</button>
		);
	};
	return (
		<div
			onMouseEnter={() => setHover(true)}
			onMouseLeave={() => setHover(false)}>
			<img
				src={src}
				alt='profile-img'
				className='w-16 bg-black border-2 border-blue-600 rounded-full hover:opacity-50'
			/>
			{hover && <SettingsButton />}
		</div>
	);
}
