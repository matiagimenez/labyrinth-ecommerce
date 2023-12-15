import { FunctionComponent, useState } from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { Image } from '../../types';
import { CarouselItem } from '..';

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
		absolute bg-rustyred top-0 p-2 rounded-lg text-white text-xs
	`;

	return (
		<section className='mt-14'>
			<h2 className='text-black px-5 text-lg  font-semibold lg:text-xl'>
				Explore our{' '}
				<span className='inline-block px-1 font-bold text-rustyred animate-bounce duration-1000 text-xl lg:text-3xl'>
					latest products
				</span>{' '}
				and find the perfect one for you
			</h2>
			<nav className='relative'>
				<button
					onClick={handleBackClick}
					className={`${
						current === 1 && 'opacity-0 cursor-default'
					} ${buttonStyles} right-16`}
				>
					<IoIosArrowBack />
				</button>
				<button
					onClick={handleForwardClick}
					className={`${
						current === images.length && 'opacity-0 cursor-default'
					} ${buttonStyles} right-8`}
				>
					<IoIosArrowForward />
				</button>
			</nav>
			<ul className='flex items-center justify-center py-6 px-4 lg:gap-6'>
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
		</section>
	);
};
