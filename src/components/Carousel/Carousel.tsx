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
		bg-rustyred rounded-lg text-white text-xs p-2 mx-4
	`;

	return (
		<section className='md:mt-24' id='Products'>
			<h2 className='text-black text-2xl px-5 py-8 pb-4 pt-32 font-medium lg:text-2xl xl:text-3xl'>
				Explore our{' '}
				<span className='pb-4 mt-2 inline-block px-1 font-bold text-rustyred animate-bounce duration-1000 text-3xl lg:text-4xl'>
					latest products
				</span>
				<span className='block font-extralight'>
					Perfect for work, gaming and everything in between
				</span>
			</h2>
			<ul className='flex w-full items-center justify-center pb-6 px-4 gap-4 min-h-[400px] lg:gap-6'>
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
			<nav className='text-center mt-6'>
				<button
					onClick={handleBackClick}
					className={`left-8 ${
						current === 1 && 'opacity-0 cursor-default'
					} ${buttonStyles}`}
				>
					<IoIosArrowBack />
				</button>
				{range(1, images.length + 1).map((index) => {
					return (
						<span
							key={index}
							onClick={() => {
								handleItemClick(index);
							}}
							className={`cursor-pointer inline-block mb-0.5 w-[50px] h-[6px] ml-0.5 rounded-lg ${
								index === current
									? 'bg-rustyred'
									: 'border border-pink bg-transparent'
							}`}
						/>
					);
				})}{' '}
				<button
					onClick={handleForwardClick}
					className={`${
						current === images.length && 'opacity-0 cursor-default'
					} ${buttonStyles}`}
				>
					<IoIosArrowForward />
				</button>
			</nav>
		</section>
	);
};
