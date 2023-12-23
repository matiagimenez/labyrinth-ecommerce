import { useState } from 'react';
import { PageLayout } from './layout';
import { HomePage } from './pages/';
import { ShoppingCart } from './types';
import { ShoppingCartContext } from './context/';

function App() {
	const [shoppingCart, setShoppingCart] = useState<ShoppingCart>({});

	function updateShoppingCart(products: ShoppingCart) {
		setShoppingCart(products);
	}

	return (
		<ShoppingCartContext.Provider
			value={{ shoppingCart, updateShoppingCart }}
		>
			<PageLayout>
				<HomePage />
			</PageLayout>
		</ShoppingCartContext.Provider>
	);
}

export default App;
