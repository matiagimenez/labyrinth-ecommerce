import { FunctionComponent, useState } from 'react';
import { Button } from './Button';
import { PiShoppingCart, PiShoppingCartFill } from 'react-icons/pi';

export const ShoppingCart: FunctionComponent = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<Button
				active={<PiShoppingCartFill />}
				inactive={<PiShoppingCart />}
				isActive={isOpen}
				handleClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			{/* <MenuList/> */}
		</>
	);
};
