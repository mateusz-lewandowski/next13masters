import Image from 'next/image';
import { type ProductItemFragment } from '@/gql/graphql';

export const ProductItemImage = (props: { product: ProductItemFragment }) => {
	const { product } = props;

	return (
		product.images[0] && (
			<div className="relative aspect-square">
				<Image
					className="h-full w-full object-cover transition hover:scale-105"
					src={product.images[0].url}
					alt={product.name}
					placeholder="empty"
					sizes="(max-width: 768px) 100vw"
					priority={true}
					fill
				/>
			</div>
		)
	);
};
