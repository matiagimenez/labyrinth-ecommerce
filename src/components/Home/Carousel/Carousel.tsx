import { FunctionComponent, useState } from 'react';
import { Image } from '../../../types';
import { CarouselItem, CarouselControls } from '.';
import { useSwipeable } from 'react-swipeable';

type CarouselProps = {
	images: Image[];
};

export const Carousel: FunctionComponent<CarouselProps> = ({ images }) => {
	const [current, setCurrent] = useState<number>(2);

	function handleItemClick(id: number) {
		setCurrent(id);
	}

	function handleNext() {
		if (current === images.length) return;
		setCurrent(current + 1);
	}

	function handlePrevious() {
		if (current === 1) return;
		setCurrent(current - 1);
	}

	const config = {
		delta: 10,
		preventScrollOnSwipe: false,
		trackTouch: true,
		trackMouse: false,
		rotationAngle: 0,
		swipeDuration: Infinity,
		touchEventOptions: { passive: true },
	};

	const handlers = useSwipeable({
		onSwipedLeft: () => handleNext(),
		onSwipedRight: () => handlePrevious(),
		...config,
	});

	return (
		<section className='md:mt-24' id='Products'>
			<h2 className='text-black text-2xl px-5 py-8 pb-4 pt-28 md:pt-32 font-medium lg:pt-28 lg:text-2xl xl:text-3xl'>
				Explore our{' '}
				<span className='pb-2 mt-2 inline-block px-1 font-bold text-rustyred animate-bounce duration-1000 text-3xl lg:text-4xl'>
					latest products
				</span>
				<span className='block font-light'>
					Perfect for work, gaming and everything in between
				</span>
			</h2>
			<ul
				{...handlers}
				className='flex w-full items-center justify-center mt-2 pb-6 px-4 gap-4 min-h-[400px] md:gap-6 xl:gap-4'
			>
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
				handleNext={handleNext}
				handlePrevious={handlePrevious}
				amountOfImages={images.length}
			/>
		</section>
	);
};
