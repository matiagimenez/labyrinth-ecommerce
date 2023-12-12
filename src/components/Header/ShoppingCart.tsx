import { FunctionComponent } from 'react';
import { HeaderButton } from './HeaderButton';
import { PiShoppingCart , PiShoppingCartFill } from 'react-icons/pi';

export const ShoppingCart: FunctionComponent = () => {
	return (
		<li className='ml-3 md:ml-5'>
			<HeaderButton
				active={<PiShoppingCartFill />}
				inactive={<PiShoppingCart  />}
			/>
			{/* <MenuList/> */}
		</li>
	);
};
