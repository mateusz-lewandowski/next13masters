import Image from 'next/image';
import { type ProductItemImageProps } from '@components/atoms';

export const ProductItemImage = (props: ProductItemImageProps) => {
	const { src, alt, className } = props;

	return (
		<div className={`aspect-square ${className}`}>
			<Image
				src={src}
				alt={alt}
				className="h-full w-full object-cover transition hover:scale-105"
				fill
			/>
		</div>
	);
};
