import { FunctionComponent } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Catalog, Carousel } from '../components';
import { Image } from '../types';

export const HomePage: FunctionComponent = () => {
	return (
		<>
			<section className='relative flex flex-col items-center md:pt-8 md:flex-row md:items-start'>
				<p className=' inline-block text-center text-5xl order-2 w-[100%] md:w-[40%] md:order-1 md:text-left xl:text-7xl md:p-8 md:pr-0 md:pt-24 lg:p-24 lg:pr-0 lg:pt-36'>
					All products{' '}
					<span className='block font-bold text-rustyred mt-2'>
						{' '}
						35% OFF
					</span>
					<a
						href='#Products'
						className='inline-block margin-auto text-base bg-rustyred mt-4 w-[200px] rounded-lg text-center p-2 text-white border-2 border-rustyred hover:bg-transparent hover:text-rustyred transition-colors duration-300'
					>
						Shop now <FaArrowRightLong className='inline' />
					</a>
				</p>
				<p className='select-none absolute rotate-90 text-cyan -right-32 top-48 hidden font-bold text-[90px] opacity-[30%] -z-10 sm:block lg:text-[100px] xl:right-0 xl:text-[110px] xl:top-56'>
					35% OFF
				</p>
				<img
					src='/images/laptop-homepage.png'
					alt='Laptop image'
					className='order-1 select-none w-[350px] h-[350px] inline-block transition-transform duration-500 hover:-rotate-3 sm:order-1 md:mt-2 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]'
				/>
			</section>
			<Carousel images={images} />
			<Catalog />
		</>
	);
};

const images: Image[] = [
	{
		id: 1,
		src: '/product-images/alienware-m15-r7-240hz-core-i7-12700h-16gb-512gb-rtx-3070ti-01-600x600.jpg',
		alt: 'Alienware M15 R7',
		href: '',
	},
	{
		id: 2,
		src: '/product-images/apple-macbook-pro-M2-pro-12-core-16gb-512gb-space-gray-01-600x600.webp',
		alt: 'Apple Macbook Pro M2',
		href: '',
	},
	{
		id: 3,
		src: '/product-images/asus-vivobook-pro-14-oled-core-i5-11300h-8gb-256gb-01-600x600.jpg',
		alt: 'Asus Vivobook Pro 14',
		href: '',
	},
	{
		id: 4,
		src: '/product-images/lenovo-ideapad-3-14-ryzen-5-8gb-256-gb-ssd-01.jpg',
		alt: 'Lenovo Ideapad 3',
		href: '',
	},
	{
		id: 5,
		src: '/product-images/lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti-01-600x600.jpg',
		alt: 'Lenovo Ideapad 3 Gaming',
		href: '',
	},
];
