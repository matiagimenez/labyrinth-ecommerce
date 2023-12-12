import { FunctionComponent } from 'react';
import { HeaderButton } from './HeaderButton';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';

export const WishList: FunctionComponent = () => {
	return (
		<li>
			<HeaderButton active={<VscHeartFilled />} inactive={<VscHeart />} />

			{/* <MenuList/> */}
		</li>
	);
};
