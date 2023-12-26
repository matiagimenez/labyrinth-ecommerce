import { WishList, Logo, ShoppingCart } from '.';

export const Header = () => {
	return (
		<header className='bg-cyan z-50 min-h-[90px] max-h-[90px] h-[10%] p-4 pl-3 fixed top-0 w-full sm:pl-6 md:min-h-[100px] shadow-md '>
			<Logo />
			<nav className='inline-block w-[40%] absolute top-9 right-12 sm:right-10 md:right-32'>
				<ul className='flex cont-right h-full items-bottom justify-end'>
					<li>
						<WishList />
					</li>
					<li className='ml-3 md:ml-5'>
						<ShoppingCart />
					</li>
				</ul>
			</nav>
		</header>
	);
};
