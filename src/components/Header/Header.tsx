import { ShoppingCart } from './ShoppingCart';
import { WishList } from './WishList';
export const Header = () => {
	return (
		<header className='bg-cyan min-h-[90px] h-[10%] p-5 pl-3 fixed top-0 w-full sm:pl-6 md:min-h-[100px] shadow-md '>
			<h1 className='inline-block text-xl font-varela md:text-2xl'>
				<a href='/'>
					<img
						src='/images/labyrinth-logo.svg'
						alt='Labyrinth logo'
						className='inline-block w-[40px] relative top-2 align-bottom mr-2 md:w-[50px]'
					/>
					LABYRINTH
				</a>
			</h1>
			<nav className='inline-block w-[40%] absolute top-8 right-5 sm:right-10 md:right-52'>
				<ul className='flex cont-right h-full items-bottom justify-end'>
					<WishList />
					<ShoppingCart />
				</ul>
			</nav>
		</header>
	);
};
