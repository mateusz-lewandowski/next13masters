import { ImageResponse } from 'next/server';
import { type ProductPageParams } from './types';
import { getProductById } from '@/api/products';
import { Heading } from '@/components/atoms/Heading';

export const runtime = 'edge';

export const alt = 'next13 masters sklep';
export const size = {
	width: 1200,
	height: 630,
};

export const contentType = 'image/png';

export default async function OpenGraphImage({ params }: ProductPageParams) {
	const { productId } = params;
	const product = await getProductById({ productId });
	const productImage = product.images[0]?.url;

	return new ImageResponse(
		(
			<div tw="flex h-full w-full flex-col items-stretch justify-end bg-slate-200 relative">
				{productImage && (
					<img
						src={product.images[0]?.url}
						alt=""
						tw="h-full w-full flex-1 absolute top-0 left-0"
						style={{ objectFit: 'contain' }}
					/>
				)}
				<div tw="flex flex-col bg-white p-8">
					<Heading title={product.name} />
					<p>{product.description}</p>
				</div>
			</div>
		),
	);
}
