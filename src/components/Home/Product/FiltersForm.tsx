import { FunctionComponent, useState, MouseEvent } from 'react';

type FiltersFormProps = {
	handleFormChange: (property: string, value: string | number) => void;
};

export const FiltersForm: FunctionComponent<FiltersFormProps> = ({
	handleFormChange,
}) => {
	// all | notebooks | gaming | gadgets
	const [category, setCategory] = useState('all');

	const inputStyles =
		'p-2 mt-1 border-2 rounded outline-rustyred border-brightpink';

	const removeArrowsStyle =
		'[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none';

	function handleCategoryChange(event: MouseEvent<HTMLInputElement>) {
		setCategory(event.currentTarget.name);
		handleFormChange('category', event.currentTarget.name);
	}

	return (
		<form action='' className='pl-4'>
			<fieldset className='inline-block w-[45%] md:w-[20%]'>
				<label className='mr-2 6 font-light block' htmlFor='filter'>
					Filter
				</label>
				<input
					type='text'
					id='filter'
					name='filter'
					autoComplete='off'
					className={`${inputStyles} w-[100%] md:w-[300px]`}
					onChange={(event) =>
						handleFormChange(event.target.name, event.target.value)
					}
				/>
			</fieldset>
			<fieldset className='mt-4 inline w-[45%] ml-4 md:ml-6 md:w-[20%]'>
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
					onChange={(event) => {
						if (!event.target.value) {
							handleFormChange(event.target.name, 0);
						} else {
							handleFormChange(
								event.target.name,
								Number(event.target.value)
							);
						}
					}}
				/>
				<input
					type='number'
					name='maxPrice'
					placeholder='$ Max'
					autoComplete='off'
					className={`${inputStyles} w-[45%] md:w-[145px] ${removeArrowsStyle}`}
					onChange={(event) => {
						if (!event.target.value) {
							handleFormChange(event.target.name, 999999999);
						} else {
							handleFormChange(
								event.target.name,
								Number(event.target.value)
							);
						}
					}}
				/>
			</fieldset>
			<fieldset className='inline-block w-[100%] mt-4 md:mt-0 md:ml-6 md:w-[45%]'>
				<label
					className='mr-2 6 font-light block md:mt-0'
					htmlFor='min'
				>
					Category
				</label>

				<input
					type='button'
					value='All'
					name='all'
					className={`${inputStyles} cursor-pointer border-r-0 border-rustyred rounded-r-none transition-colors ${
						category === 'all' &&
						` bg-rustyred border-rustyred text-white`
					} w-fit px-4 md:w-[145px] ${removeArrowsStyle}`}
					onClick={handleCategoryChange}
				/>
				<input
					type='button'
					value='Notebooks'
					name='notebooks'
					className={`${inputStyles} border-rustyred cursor-pointer rounded-none transition-colors ${
						category === 'notebooks' &&
						` bg-rustyred border-rustyred text-white`
					} w-fit px-4 md:w-[145px] ${removeArrowsStyle}`}
					onClick={handleCategoryChange}
				/>
				<input
					type='button'
					value='Gaming'
					name='gaming'
					className={`${inputStyles} border-rustyred cursor-pointer rounded-none border-l-0 transition-colors ${
						category === 'gaming' &&
						`bg-rustyred border-rustyred text-white`
					} w-fit px-4 md:w-[145px] ${removeArrowsStyle}`}
					onClick={handleCategoryChange}
				/>
				<input
					type='button'
					value='Gadgets'
					name='gadgets'
					className={`${inputStyles} border-rustyred cursor-pointer rounded-l-none border-l-0 transition-colors ${
						category === 'gadgets' &&
						` bg-rustyred border-rustyred text-white`
					} w-fit px-4 md:w-[145px] ${removeArrowsStyle}`}
					onClick={handleCategoryChange}
				/>
			</fieldset>
		</form>
	);
};
