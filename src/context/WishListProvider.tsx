import { ReactElement, createContext, useMemo, useState } from 'react';
import { WishList } from '../types';
import { readLocalStorage } from '../helpers';

type WishListContextType = {
	wishList: WishList;
	updateWishList: (products: WishList) => void;
};

export const WishListContext = createContext<WishListContextType>({
	wishList: {},
	updateWishList: () => {},
});

export function WishListProvider({ children }: { children: ReactElement }) {
	const [wishList, setWishList] = useState<WishList>(() => {
		return JSON.parse(readLocalStorage('wish-list') ?? '{}');
	});

	const updateWishList = (products: WishList) => {
		setWishList(products);
	};

	const wishListValue = useMemo(() => {
		return { wishList, updateWishList };
	}, [wishList]);

	return (
		<WishListContext.Provider value={wishListValue}>
			{children}
		</WishListContext.Provider>
	);
}
