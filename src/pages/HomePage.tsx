import { FaArrowRightLong } from 'react-icons/fa6';
export const HomePage = () => {
	return (
		<section className='relative flex flex-col items-center md:pt-8 md:flex-row md:items-start'>
			<p className=' inline-block text-center text-5xl order-2 w-[100%] md:w-[40%] md:order-1 md:text-left xl:text-6xl md:p-8 md:pr-0 md:pt-24 lg:p-24 lg:pr-0 lg:pt-36'>
				All products{' '}
				<span className='block font-bold text-rustyred mt-2'>
					{' '}
					35% OFF
				</span>
				<a
					href='#Products'
					className='inline-block margin-auto text-base bg-rustyred mt-4 w-[200px] rounded-lg text-center p-2 text-white border-2 border-rustyred hover:bg-transparent hover:text-rustyred transition-colors'
				>
					Shop now <FaArrowRightLong className='inline' />
				</a>
			</p>
			<p className='absolute rotate-90 text-cyan -right-32 top-48 hidden font-bold text-[90px] opacity-[30%] -z-10 sm:block lg:text-[100px] xl:-right-24'>
				35% OFF
			</p>
			<img
				src='/images/laptop-homepage.png'
				alt='Apple MacBook Pro M2'
				className='order-1 w-[350px] h-[350px] inline-block transition-transform duration-500 hover:-rotate-6 sm:order-1 md:mt-2 md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] '
			/>
		</section>
	);
};
