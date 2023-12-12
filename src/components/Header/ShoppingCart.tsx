import { FunctionComponent } from 'react';
import { HeaderButton } from './HeaderButton';
import { RiShoppingCart2Line, RiShoppingCart2Fill } from 'react-icons/ri';

export const ShoppingCart: FunctionComponent = () => {
	return (
		<li className='ml-3 md:ml-5'>
			<HeaderButton
				active={<RiShoppingCart2Fill />}
				inactive={<RiShoppingCart2Line />}
			/>
			{/* <MenuList/> */}
		</li>
	);
};
