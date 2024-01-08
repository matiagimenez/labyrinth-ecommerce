import { FunctionComponent } from 'react';
import { useSwipe } from '../../hooks';
import { range } from '../../utils/range';

type ProductImagesProps = {
	images: string[] | undefined;
	alt: string | undefined;
	id: string | undefined;
};

export const ProductImages: FunctionComponent<ProductImagesProps> = ({
	images = [],
	alt = '',
	id = '',
}) => {
	const { current, setCurrent, handlers } = useSwipe({
		minIndex: 0,
		maxIndex: images.length - 1,
	});

	const src = `/product-images/${id}`;

	return (
		<section className='relative flex flex-col sm:flex-row' {...handlers}>
			<div className='hidden justify-center sm:flex sm:flex-col w-[150px] p-6 pb-0 sm:p-6 mr-8'>
				{images.map((image, index) => {
					return (
						<img
							src={`${src}-${images[index]}`}
							alt={`${alt}-image-${index}`}
							key={image}
							className={`my-1 h-[70px] w-[70px] border rounded-md p-1 cursor-pointer ${
								index === current ? 'opacity-100' : 'opacity-40'
							} transition-opacity`}
							onClick={() => setCurrent(index)}
						/>
					);
				})}
			</div>

			<img
				src={`${src}-${images[current]}`}
				alt={alt}
				className='px-4 pr-12 sm:px-0 ml-auto mr-auto max-w-[400px] max-h-[400px] md:max-w-[500px] md:max-h-[500px]'
			/>
			<div className='block absolute bottom-0 left-0 right-0 w-fit ml-auto mr-auto sm:hidden '>
				{range(0, images.length).map((index) => {
					return (
						<span
							key={index}
							onClick={() => {
								setCurrent(index);
							}}
							className={`hidtransition-all duration-200 cursor-pointer inline-block mb-0.5 w-[40px] md:w-[50px] h-[6px] ml-0.5 rounded-lg ${
								index === current
									? 'bg-rustyred'
									: 'border border-pink bg-transparent'
							}`}
						/>
					);
				})}
			</div>
		</section>
	);
};
