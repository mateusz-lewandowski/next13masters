import { formatMoney } from '@/utils/FormatMoney';
import { type ProductItemFragment } from '@/gql/graphql';

export const ProductItemPrice = (props: { product: ProductItemFragment }) => {
	const { product } = props;

	return (
		<span className="font-semibold text-gray-950" data-testid="product-price">
			{formatMoney(product.price / 100)}
		</span>
	);
};
