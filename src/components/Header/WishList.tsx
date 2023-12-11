import { FunctionComponent } from 'react';
import { Button } from './Button';

export const WishList: FunctionComponent = () => {
	return (
		<li>
			<Button src='/images/wishlist-icon.svg' alt='Wishlist icon' />
			{/* <MenuList/> */}
		</li>
	);
};
