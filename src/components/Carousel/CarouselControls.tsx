import { FunctionComponent } from 'react';
import { range } from '../../utils/range';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';

type CarouselControlsProps = {
	current: number;
	setCurrent: (id: number) => void;
	amountOfImages: number;
};

export const CarouselControls: FunctionComponent<CarouselControlsProps> = ({
	current,
	setCurrent,
	amountOfImages,
}) => {
	const buttonStyles = `
        bg-rustyred rounded-lg text-white text-xs p-2 mx-4
    `;

	function handleForwardClick() {
		if (current === amountOfImages) return;
		setCurrent(current + 1);
	}

	function handleBackClick() {
		if (current === 1) return;
		setCurrent(current - 1);
	}

	return (
		<nav className='text-center mt-6'>
			<button
				onClick={handleBackClick}
				className={`left-8 ${
					current === 1 && 'opacity-0 cursor-default'
				} ${buttonStyles}`}
			>
				<IoIosArrowBack />
			</button>
			{range(1, amountOfImages + 1).map((index) => {
				return (
					<span
						key={index}
						onClick={() => {
							setCurrent(index);
						}}
						className={`transition-all duration-200 cursor-pointer inline-block mb-0.5 w-[50px] h-[6px] ml-0.5 rounded-lg ${
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
					current === amountOfImages && 'opacity-0 cursor-default'
				} ${buttonStyles} transition-opacity duration-300`}
			>
				<IoIosArrowForward />
			</button>
		</nav>
	);
};
