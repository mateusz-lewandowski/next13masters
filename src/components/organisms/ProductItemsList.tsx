import { ProductItemTile } from '@/components/molecules/ProductItemTile';
import { type ProductItemFragment } from '@/gql/graphql';

export const ProductItemsList = (props: { products: ProductItemFragment[] }) => {
	const { products } = props;

	return (
		<ul
			className="container mx-auto grid grid-flow-row grid-cols-1 gap-8 px-4 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductItemTile key={product.id} product={product} />;
			})}
		</ul>
	);
};
