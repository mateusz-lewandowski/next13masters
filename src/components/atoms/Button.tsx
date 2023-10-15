import { type ReactNode, type ButtonHTMLAttributes } from 'react';

export const Button = (
	props: ButtonHTMLAttributes<HTMLButtonElement> & { children: ReactNode },
) => {
	const { children, ...buttonAttributes } = props;

	return (
		<button
			className="rounded-full bg-gray-950 px-4 py-2 font-medium text-white disabled:bg-gray-400"
			{...buttonAttributes}
		>
			{children}
		</button>
	);
};
