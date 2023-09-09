import { type ProductItemBadgeProps } from '@/components/atoms';

export const ProductItemBadge = (props: ProductItemBadgeProps) => {
	const { text } = props;

	return (
		<div className="mb-5 inline-block rounded-full bg-black px-6 py-2 text-sm/4 font-medium text-white">
			<span>{text}</span>
		</div>
	);
};
