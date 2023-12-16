import { FunctionComponent, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Image } from '../../types';
import { CarouselItem } from '..';
import { range } from '../../utils/range';

type CarouselProps = {
	images: Image[];
};

export const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
	const [current, setCurrent] = useState<number>(2);

	function handleForwardClick() {
		if (current === images.length) return;
		setCurrent(current + 1);
	}

	function handleBackClick() {
		if (current === 1) return;
		setCurrent(current - 1);
	}

	function handleItemClick(id: number) {
		setCurrent(id);
	}

	const buttonStyles = `
		bg-rustyred rounded-3xl text-white text-xs p-3 ml-1
	`;

	return (
		<section className='md:mt-24 relative'>
			<h2 className='text-black px-5 py-8 text-xl font-medium lg:text-2xl xl:text-3xl'>
				Explore our{' '}
				<span className='pb-4 mt-2 inline-block px-1 font-bold text-rustyred animate-bounce duration-1000 text-3xl lg:text-4xl'>
					latest products
				</span>
			</h2>
			<nav className='absolute right-10 top-20 pt-2 md:top-24 md:right-16'>
				<button
					onClick={handleBackClick}
					className={`${
						current === 1 && 'opacity-0 cursor-default'
					} ${buttonStyles}`}
				>
					<IoIosArrowBack />
				</button>
				<button
					onClick={handleForwardClick}
					className={`${
						current === images.length && 'opacity-0 cursor-default'
					} ${buttonStyles}`}
				>
					<IoIosArrowForward />
				</button>
			</nav>
			<ul className='flex w-full items-center justify-center py-8 px-4 gap-4 min-h-[400px] lg:gap-6'>
				{images.map((image: Image) => {
					return (
						<CarouselItem
							key={image.id}
							image={image}
							current={current}
							handleItemClick={handleItemClick}
						/>
					);
				})}
			</ul>
			<p className='text-center'>
				{range(1, images.length + 1).map((index) => {
					return (
						<span
							key={index}
							onClick={() => {
								handleItemClick(index);
							}}
							className={`cursor-pointer inline-block w-[50px] h-[6px] ml-0.5 rounded-lg ${
								index === current
									? 'bg-rustyred'
									: 'border border-pink bg-transparent'
							}`}
						/>
					);
				})}
			</p>
		</section>
	);
};
