import { type ProductItemsListProps } from '@components/organisms';
import { ProductItemTile } from '@components/molecules';

export const ProductItemsList = (props: ProductItemsListProps) => {
	const { products } = props;

	return (
		<ul
			className="grid grid-flow-row grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
			data-testid="products-list"
		>
			{products.map((product) => {
				return <ProductItemTile key={product.id} {...product} />;
			})}
		</ul>
	);
};
