import Link from 'next/link';
import { Heading } from '@/components/atoms/Heading';
import { getProductsList } from '@/api/products';
import { ProductItemsList } from '@/components/organisms/ProductItemsList';

export default async function Home() {
	const { products: relatedProsucts } = await getProductsList({ first: 4 });

	return (
		<>
			<div className="container mx-auto px-4">
				<Heading title="KURS NEXT13masters" />
				<Link href="/collections/summer-vibes" className="mt-4">
					Summer
				</Link>
			</div>

			{relatedProsucts.length > 0 && (
				<div className="mt-8" data-testid="related-products">
					<div className="mb-5 text-center">
						<Heading tag="h2" title="Top Products" />
					</div>
					<ProductItemsList products={relatedProsucts} />
				</div>
			)}
		</>
	);
}
