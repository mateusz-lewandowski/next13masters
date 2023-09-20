import Link from 'next/link';
import { type ProductItemTileProps } from '@components/molecules';
import {
	Heading,
	ProductItemCategory,
	ProductItemImage,
	ProductItemPrice,
} from '@components/atoms';

export const ProductItemTile = (props: ProductItemTileProps) => {
	const { id, category, name, price, image } = props;

	return (
		<li>
			<Link href={`/product/${id}`}>
				<article className="rounded-lg bg-gray-100 p-6">
					<ProductItemImage className="relative mb-10" src={image.src} alt={image.alt} />
					<div className="flex flex-col">
						<Heading
							tag="h3"
							className="mb-8 truncate text-2xl/normal font-semibold text-gray-950"
							title={name}
						/>
						<ProductItemCategory category={category} />
						<ProductItemPrice className="font-semibold text-gray-950" price={price} />
					</div>
				</article>
			</Link>
		</li>
	);
};
