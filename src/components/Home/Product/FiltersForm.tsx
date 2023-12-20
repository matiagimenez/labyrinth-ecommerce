import {
	FunctionComponent,
	ChangeEvent,
	useState,
	MouseEvent,
	useRef,
} from 'react';

type FiltersFormProps = {
	handleFormChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const FiltersForm: FunctionComponent<FiltersFormProps> = ({
	handleFormChange,
}) => {
	// all | notebooks | gaming | gadgets
	const [category, setCategory] = useState('all');
	const categoryInput = useRef<HTMLInputElement>(null);

	const inputStyles =
		'p-2 mt-1 border-2 rounded outline-rustyred border-brightpink';

	const removeArrowsStyle =
		'[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none';

	function handleCategoryChange(event: MouseEvent<HTMLInputElement>) {
		const nextCategory = event.currentTarget.name;
		setCategory(nextCategory);

		if (categoryInput.current) {
			categoryInput.current.value = nextCategory;
		}
	}

	return (
		<form action='' className='pl-4'>
			<fieldset className='inline-block w-[45%]'>
				<label className='mr-2 6 font-light block' htmlFor='filter'>
					Filter
				</label>
				<input
					type='text'
					id='filter'
					name='filter'
					autoComplete='off'
					className={`${inputStyles} w-[100%] md:w-[300px]`}
					onChange={handleFormChange}
				/>
			</fieldset>
			<fieldset className='mt-4 inline w-[45%] ml-4 md:ml-8'>
				<label
					className='mr-2 6 font-light block md:mt-0'
					htmlFor='min'
				>
					Price
				</label>
				<input
					type='number'
					name='minPrice'
					id='min'
					placeholder='$ Min'
					className={`${inputStyles} w-[45%] md:w-[145px] mr-2 ${removeArrowsStyle}`}
					onChange={handleFormChange}
				/>
				<input
					type='number'
					name='maxPrice'
					placeholder='$ Max'
					autoComplete='off'
					className={`${inputStyles} w-[45%] md:w-[145px] ${removeArrowsStyle}`}
					onChange={handleFormChange}
				/>
			</fieldset>
			<fieldset className='inline-block w-[100%] mt-4'>
				<label
					className='mr-2 6 font-light block md:mt-0'
					htmlFor='min'
				>
					Category
				</label>

				<input
					type='hidden'
					className='hidden'
					onChange={() => {
						console.log('change');
					}}
					value={category}
					ref={categoryInput}
				/>

				<input
					type='button'
					name='all'
					value='All'
					className={`${inputStyles} cursor-pointer border-r-0 rounded-r-none transition-colors ${
						category === 'all' &&
						`bg-rustyred border-rustyred text-white`
					} w-fit px-4 md:w-[145px] ${removeArrowsStyle}`}
					onClick={handleCategoryChange}
				/>
				<input
					type='button'
					name='notebooks'
					className={`${inputStyles} cursor-pointer rounded-none transition-colors ${
						category === 'notebooks' &&
						`border-x-0 bg-rustyred border-rustyred text-white`
					} w-fit px-4 md:w-[145px] ${removeArrowsStyle}`}
					onClick={handleCategoryChange}
					value='Notebooks'
				/>
				<input
					type='button'
					name='gaming'
					className={`${inputStyles} cursor-pointer rounded-none border-l-0 transition-colors ${
						category === 'gaming' &&
						`border-x-0 bg-rustyred border-rustyred text-white`
					} w-fit px-4 md:w-[145px] ${removeArrowsStyle}`}
					onClick={handleCategoryChange}
					value='Gaming'
				/>
				<input
					type='button'
					name='gadgets'
					className={`${inputStyles} cursor-pointer rounded-l-none border-l-0 transition-colors ${
						category === 'gadgets' &&
						`bg-rustyred border-l-0 border-rustyred text-white`
					} w-fit px-4 md:w-[145px] ${removeArrowsStyle}`}
					onClick={handleCategoryChange}
					value='Gadgets'
				/>
			</fieldset>
		</form>
	);
};
