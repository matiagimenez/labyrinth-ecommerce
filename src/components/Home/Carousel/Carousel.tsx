import { FunctionComponent, useState } from 'react';
import { Image } from '../../../types';
import { CarouselItem, CarouselControls } from '.';

type CarouselProps = {
	images: Image[];
};

export const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
	const [current, setCurrent] = useState<number>(2);

	function handleItemClick(id: number) {
		setCurrent(id);
	}

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
			<CarouselControls
				setCurrent={setCurrent}
				current={current}
				amountOfImages={images.length}
			/>
		</section>
	);
};
