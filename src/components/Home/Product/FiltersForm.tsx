import { FunctionComponent, ChangeEvent } from 'react';

export const FiltersForm: FunctionComponent = () => {
	return (
		<form action='' className='pl-4'>
			<label className='mr-2 6 font-light'>Your e-mail address</label>
			<input
				type='email'
				name='email'
				autoComplete='off'
				className='p-2 mt-1 border-2 rounded w-[70%] md:w-[300px] outline-rustyred border-brightpink'
				onChange={(event: ChangeEvent<HTMLInputElement>) => {
					console.log(event.currentTarget.value);
				}}
			/>
		</form>
	);
};
