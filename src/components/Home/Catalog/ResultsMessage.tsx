import { FunctionComponent } from 'react';

type ResultMessageProps = {
	amount: number;
};

export const ResultsMessage: FunctionComponent<ResultMessageProps> = ({
	amount = 0,
}) => {
	const style: string = `block font-normal text-gray-800 py-4 pl-4`;

	if (amount === 0) return <span className={style}>0 results found</span>;
	if (amount === 1) return <span className={style}>1 result found</span>;

	return <span className={style}>{amount} results found</span>;
};
