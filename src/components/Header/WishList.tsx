import { FunctionComponent, useState } from 'react';
import { Button } from './Button';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';

export const WishList: FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<Button
				active={<VscHeartFilled />}
				inactive={<VscHeart />}
				isActive={isOpen}
				handleClick={() => {
					setIsOpen(!isOpen);
				}}
			/>

			{/* <MenuList/> */}
		</>
	);
};
