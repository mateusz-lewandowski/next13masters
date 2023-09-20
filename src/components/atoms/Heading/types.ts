import type { ElementType } from 'react';

export type HeadingProps = {
	tag?: Extract<ElementType, `h${number}`>;
	title: string;
	className?: string;
};
