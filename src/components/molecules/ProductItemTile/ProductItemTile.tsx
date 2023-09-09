import { type ProductItemTileProps } from '@/components/molecules';
import { ProductItemBadge, ProductItemDetails, ProductItemImage } from '@/components/atoms';

export const ProductItemTile = (props: ProductItemTileProps) => {
	const { badge, category, name, price, image } = props;

	return (
		<li>
			<article className="rounded-lg bg-gray-100 p-6">
				<ProductItemBadge text={badge} />
				<ProductItemImage {...image} />
				<ProductItemDetails name={name} category={category} price={price} />
			</article>
		</li>
	);
};
