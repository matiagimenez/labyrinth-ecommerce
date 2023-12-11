import { FunctionComponent } from 'react';
import { Button } from './Button';

export const ShoppingCart: FunctionComponent = () => {
	return (
		<li className='ml-3 md:ml-5'>
			<Button src='/images/shopping-cart.svg' alt='Shopping cart icon' />
			{/* <MenuList/> */}
		</li>
	);
};
