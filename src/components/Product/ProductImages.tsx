import { FunctionComponent, useState } from 'react';

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
	const [currentImage, setCurrentImage] = useState(0);

	const src = `/product-images/${id}`;

	return (
		<section className='flex'>
			<div className='hidden sm:flex sm:flex-col sm:justify-center w-[100px] pr-6'>
				{images.map((image, index) => {
					return (
						<img
							src={`${src}-${images[index]}`}
							alt={`${alt}-image-${index}`}
							key={image}
							className={`my-1 h-[60px] w-[60px] border rounded-md p-1 cursor-pointer ${
								index === currentImage
									? 'opacity-100'
									: 'opacity-40'
							} transition-opacity`}
							onClick={() => setCurrentImage(index)}
						/>
					);
				})}
			</div>
			<img
				src={`${src}-${images[currentImage]}`}
				alt={alt}
				className='px-8 sm:px-0 ml-auto mr-auto sm:max-w-[500px] sm:max-h-[500px]'
			/>
		</section>
	);
};
