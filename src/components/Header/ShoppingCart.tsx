import { FunctionComponent } from 'react';
import { HeaderButton } from './HeaderButton';

export const ShoppingCart: FunctionComponent = () => {
	return (
		<li className='ml-3 md:ml-5'>
			<HeaderButton
				src='/images/shopping-cart.svg'
				alt='Shopping cart icon'
			/>
			{/* <MenuList/> */}
		</li>
	);
};
