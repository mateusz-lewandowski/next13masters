import type { HeadingProps } from '@/components/atoms';

export function Heading(props: HeadingProps) {
	const { tag = 'h1', title, className } = props;
	const Tag = tag;

	return <Tag className={className}>{title}</Tag>;
}
