import Image from 'next/image';
import { type ProductItemImageProps } from '@/components/atoms';

export const ProductItemImage = (props: ProductItemImageProps) => {
	const { src, alt } = props;

	return (
		<div className="mb-10 aspect-square">
			<Image
				src={src}
				alt={alt}
				width={312}
				height={312}
				className="h-full w-full object-cover transition hover:scale-110"
			/>
		</div>
	);
};
