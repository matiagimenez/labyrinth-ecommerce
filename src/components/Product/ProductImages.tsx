import { FunctionComponent } from 'react';
import { useSwipe } from '../../hooks';

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
		<section className='flex flex-col sm:flex-row' {...handlers}>
			<div className='hidden justify-center sm:flex sm:flex-col w-full md:w-[150px] p-6 pb-0 sm:p-6 mr-8'>
				{images.map((image, index) => {
					return (
						<img
							src={`${src}-${images[index]}`}
							alt={`${alt}-image-${index}`}
							key={image}
							className={`my-1 h-[60px] w-[60px] md:w-[70px] border rounded-md p-1 cursor-pointer ${
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
				className='px-8 sm:px-0 ml-auto mr-auto sm:max-w-[500px] sm:max-h-[500px]'
			/>
		</section>
	);
};
