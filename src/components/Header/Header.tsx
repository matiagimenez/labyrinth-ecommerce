import { ShoppingCart } from './ShoppingCart';
import { WishList, Logo } from '.';

export const Header = () => {
	return (
		<header className='bg-cyan z-10 min-h-[90px] max-h-[90px] h-[10%] p-4 pl-3 fixed top-0 w-full sm:pl-6 md:min-h-[100px] shadow-md '>
			<Logo />
			<nav className='inline-block w-[40%] absolute top-9 right-12 sm:right-10 md:right-32'>
				<ul className='flex cont-right h-full items-bottom justify-end'>
					<WishList />
					<ShoppingCart />
				</ul>
			</nav>
		</header>
	);
};
