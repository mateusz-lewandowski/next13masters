import { type Metadata } from 'next';
import { type ProductPageParams } from './type';
import {
	Heading,
	ProductItemImage,
	ProductItemCounter,
	ProductItemPrice,
	ProductItemCategory,
} from '@components/atoms';
import { getProducts, getProductById } from '@api/products';

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
	const product = await getProductById(params.productId);

	return {
		title: `${product.name} - Next13masters`,
		description: `${product.description}`,
	};
}

export async function generateStaticParams() {
	const products = await getProducts();

	return products.map((product) => ({ productId: product.id }));
}

export default async function ProductPage({ params }: ProductPageParams) {
	const product = await getProductById(params.productId);

	return (
		<>
			<div className="from-white from-50% to-gray-100 to-50% md:bg-gradient-to-r">
				<div className="container mx-auto px-4">
					<div className="grid md:grid-cols-6">
						<ProductItemImage
							className="relative overflow-hidden md:col-span-3"
							src={product.image.src}
							alt={product.image.alt}
						/>
						<div className="grid content-start gap-8 py-8 md:col-span-2 md:col-end-7 md:content-center">
							<Heading className="font-heading text-5xl" title={product.name} />
							<ProductItemCategory className="text-gray-500" category={product.category} />
							<ProductItemPrice className="font-semibold text-gray-950" price={product.price} />
							<span>{product.description}</span>
							<ProductItemCounter />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
