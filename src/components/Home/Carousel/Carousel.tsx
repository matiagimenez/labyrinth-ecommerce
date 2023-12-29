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
		<section className='md:mt-24'>
			<h2 className='text-gray-800 text-2xl sm:text-3xl lg:text-4xl w-[95%] pt-14 md:pt-0 text-center pb-2 mr-auto ml-auto font-bold'>
				Explore our{' '}
				<span className='inline-block font-bold text-rustyred'>
					latest products
				</span>
				<span className='block pb-4 px-4 text-gray-600 font-normal text-xl'>
					Perfect for work, gaming and everything in between
				</span>
			</h2>
			<ul
				{...handlers}
				className='flex w-full items-center justify-center mt-2 pb-6 gap-4 min-h-[400px] md:gap-6 xl:gap-4'
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
