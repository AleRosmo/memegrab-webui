import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";

export default function ApprovalButton({ id, action, setApproved, nextImage }) {
	return (
		<button
			type='button'
			onClick={
				action
					? () => {
							// nextImage();
							setApproved(id, true);
					  }
					: () => {
							// nextImage();
							setApproved(id, false);
					  }
			}
			className='bg-white p-4 border rounded-full hover:opacity-50'>
			{action ? (
				<AiOutlineCheck size={36} color='green' />
			) : (
				<AiOutlineClose size={36} color='red' />
			)}
		</button>
	);
}
