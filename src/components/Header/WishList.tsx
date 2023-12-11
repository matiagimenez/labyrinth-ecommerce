import { FunctionComponent } from 'react';
import { HeaderButton } from './HeaderButton';

export const WishList: FunctionComponent = () => {
	return (
		<li>
			<HeaderButton src='/images/wishlist-icon.svg' alt='Wishlist icon' />
			{/* <MenuList/> */}
		</li>
	);
};
