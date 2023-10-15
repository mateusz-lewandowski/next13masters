import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { type ProductPageParams } from './types';
import { getProductsList, getProductById } from '@/api/products';
import { ProductItemImage } from '@/components/atoms/ProductItemImage';
import { Heading } from '@/components/atoms/Heading';
import { ProductItemCategory } from '@/components/atoms/ProductItemCategory';
import { ProductItemPrice } from '@/components/atoms/ProductItemPrice';
import { ProductItemsList } from '@/components/organisms/ProductItemsList';
import { ProductItemAddToCard } from '@/components/organisms/ProductItemAddToCard';
import { ProductItemReview } from '@/components/organisms/ProductItemRewiew';

export async function generateMetadata({ params }: ProductPageParams): Promise<Metadata> {
	const { productId } = params;
	const product = await getProductById({ productId });

	if (!product) throw notFound();

	return {
		title: `${product.name} - Next13masters`,
		description: `${product.description}`,
	};
}

// export async function generateStaticParams() {
// 	const { products } = await getProductsList({});

// 	return products.map((product) => ({ productId: product.id }));
// }

export default async function ProductPage({ params }: ProductPageParams) {
	const { productId } = params;
	const product = await getProductById({ productId });
	const { products: relatedProsucts } = await getProductsList({ first: 4 });

	if (!product) throw notFound();

	return (
		<>
			<div className="container mx-auto grid gap-8 px-4 md:grid-cols-2">
				<ProductItemImage product={product} />
				<div className="flex flex-col gap-2">
					<Heading title={product.name} />
					<ProductItemCategory product={product} />
					<ProductItemPrice product={product} />
					<ProductItemAddToCard product={product} />
					<span className="mt-6">{product.description}</span>
				</div>
			</div>
			<ProductItemReview product={product} />
			{relatedProsucts.length > 0 && (
				<div className="mt-8" data-testid="related-products">
					<div className="mb-5 text-center">
						<Heading tag="h2" title="Related Products" />
					</div>
					<ProductItemsList products={relatedProsucts} />
				</div>
			)}
		</>
	);
}
