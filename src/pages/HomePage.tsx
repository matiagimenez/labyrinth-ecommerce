import { FunctionComponent } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Catalog } from '../components/Catalog';

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
			<Catalog />
		</>
	);
};
