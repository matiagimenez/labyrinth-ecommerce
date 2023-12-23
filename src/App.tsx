import { useState } from 'react';
import { PageLayout } from './layout';
import { HomePage } from './pages/';
import { ShoppingCart, WishList } from './types';
import { ShoppingCartContext, WishListContext } from './context/';

function App() {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});
	const [wishList, setWishList] = useState<WishList>([]);

	function updateShoppingCart(products: ShoppingCart) {
		setShoppingCart(products);
	}

	function updateWishList(products: WishList) {
		setWishList(products);
	}

	return (
		<ShoppingCartContext.Provider
			value={{ shoppingCart, updateShoppingCart }}
		>
			<WishListContext.Provider value={{ wishList, updateWishList }}>
				<PageLayout>
					<HomePage />
				</PageLayout>
			</WishListContext.Provider>
		</ShoppingCartContext.Provider>
	);
}

export default App;
