import { FunctionComponent } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Catalog, Carousel } from '../components';
import { Image } from '../types';

export const HomePage: FunctionComponent = () => {
	return (
		<>
			<section className='overflow-hidden justify-center relative flex flex-col items-center md:min-h-fit lg:pt-8 lg:flex-row lg:items-start 2xl:justify-start 2xl:px-8'>
				<section className=' inline-block text-center text-4xl order-2 mt-4 lg:w-[40%] lg:order-1 lg:text-left md:text-5xl lg:text-[3.2rem] md:mt-8 2xl:text-[3.6rem] md:pr-0 lg:p-28 lg:pr-0 lg:pt-12 lg:pl-6 2xl:pl-0 xl:w-[35%]'>
					<p className='px-4'>
						The latest and greatest laptop now available for
						purchase
					</p>
					<p className='pt-4 px-4'>
						<span className='block font-bold text-rustyred mt-2'>
							{' '}
							35% OFF
						</span>
						<a
							href='#Products'
							className='block ml-auto mr-auto text-base bg-rustyred mt-4 w-[250px] rounded-lg text-center p-2 text-white border-2 border-rustyred hover:bg-transparent hover:text-rustyred transition-colors duration-300 lg:ml-0 lg:mt-6'
						>
							Shop now <FaArrowRightLong className='inline' />
						</a>
					</p>
				</section>
				<img
					src='/images/laptop-homepage.png'
					alt='Laptop image'
					className='order-1 mb-8 select-none h-[200px] sm:h-[320px] md:mb-0 inline-block md:h-[350px] md:mt-8 lg:h-[420px] xl:mt-8 xl:h-[500px] 2xl:mt-8 2xl:h-[500px]'
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
		href: '/product/alienware-m15-r7-240hz-core-i7-12700h-16gb-512gb-rtx-3070ti',
	},
	{
		id: 2,
		src: '/product-images/apple-macbook-pro-M2-pro-12-core-16gb-512gb-space-gray-01-600x600.webp',
		alt: 'Apple Macbook Pro M2',
		href: '/product/apple-macbook-pro-M2-pro-12-core-16gb-512gb-space-gray',
	},
	{
		id: 3,
		src: '/product-images/asus-vivobook-pro-14-oled-core-i5-11300h-8gb-256gb-01-600x600.jpg',
		alt: 'Asus Vivobook Pro 14',
		href: '/product/asus-vivobook-pro-14-oled-core-i5-11300h-8gb-256gb',
	},
	{
		id: 4,
		src: '/product-images/lenovo-ideapad-3-14-ryzen-5-8gb-256-gb-ssd-01.jpg',
		alt: 'Lenovo Ideapad 3',
		href: '/product/lenovo-ideapad-3-14-ryzen-5-8gb-256-gb-ssd',
	},
	{
		id: 5,
		src: '/product-images/lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti-01-600x600.jpg',
		alt: 'Lenovo Ideapad 3 Gaming',
		href: '/product/lenovo-ideapad-gaming-3-120hz-ryzen-5-8gb-256gb-rtx-3050ti',
	},
];
