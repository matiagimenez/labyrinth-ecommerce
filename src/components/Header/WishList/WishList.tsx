import { FunctionComponent } from 'react';
import { Button } from '../Button';
import { VscHeart, VscHeartFilled } from 'react-icons/vsc';
import { ProductList, WishListItem } from '..';
import { useWishList } from '../../../hooks/';

type WishListProps = {
	isOpen: boolean;
	toggleMenu: (element: string, isOpen: boolean) => void;
};

export const WishList: FunctionComponent<WishListProps> = ({
	isOpen,
	toggleMenu,
}) => {
	const { wishList, handleRemoveWishListItem } = useWishList();
	return (
		<>
			<Button
				active={<VscHeartFilled />}
				inactive={<VscHeart />}
				isActive={isOpen}
				handleClick={() => {
					toggleMenu('wishlist', !isOpen);
				}}
			/>
			<ProductList isOpen={isOpen}>
				{Object.keys(wishList).length > 0 ? (
					<section>
						{Object.keys(wishList).map((key) => {
							const { product } = wishList[key];
							return (
								<WishListItem
									key={product.id}
									product={product}
									handleRemoveWishListItem={
										handleRemoveWishListItem
									}
								/>
							);
						})}
					</section>
				) : (
					<p className='py-24 text-center text-lg font-semibold text-rustyred'>
						The wishlist is empty
					</p>
				)}
			</ProductList>
		</>
	);
};
