import Link from 'next/link';
import { Heading } from '../atoms/Heading';
import { ProductItemCategory } from '../atoms/ProductItemCategory';
import { ProductItemImage } from '../atoms/ProductItemImage';
import { ProductItemPrice } from '../atoms/ProductItemPrice';
import { type ProductItemFragment } from '@/gql/graphql';

export const ProductItemTile = (props: { product: ProductItemFragment }) => {
	const { product } = props;

	return (
		<li>
			<Link href={{ pathname: `/product/${product.id}` }}>
				<article className="flex flex-col gap-5 rounded-lg bg-gray-100 p-6">
					<ProductItemImage product={product} />
					<div className="flex flex-col gap-2">
						<Heading tag="h3" title={product.name} />
						<ProductItemCategory product={product} />
						<ProductItemPrice product={product} />
						<div data-testid="product-rating">{product.averageRating || 0}/5</div>
					</div>
				</article>
			</Link>
		</li>
	);
};
