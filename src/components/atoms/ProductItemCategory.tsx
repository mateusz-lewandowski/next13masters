import { type ProductItemFragment } from '@/gql/graphql';

export const ProductItemCategory = (props: { product: ProductItemFragment }) => {
	const { product } = props;

	return (
		product.categories[0] && <span className="text-gray-500">{product.categories[0].name}</span>
	);
};
