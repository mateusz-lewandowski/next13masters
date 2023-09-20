import { type ProductItemCategoryProps } from '@components/atoms';

export const ProductItemCategory = (props: ProductItemCategoryProps) => {
	const { category, className = 'mb-4 text-gray-500' } = props;

	return <span className={className}>{category}</span>;
};
