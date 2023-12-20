import { FunctionComponent } from 'react';

type TooltipProps = {
	position: string;
	text: string;
};
export const Tooltip: FunctionComponent<TooltipProps> = ({
	position,
	text,
}) => {
	return (
		<span
			className={`p-0 px-2 py-1 border block w-max group-hover:opacity-100 transition-opacity duration-500  text-black bg-white border-rustyred text-[12px] rounded-sm absolute font-medium opacity-0 m-0 mx-auto ${position}`}
		>
			{text}
		</span>
	);
};
