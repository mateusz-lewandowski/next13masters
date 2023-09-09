import { ProductItemsList } from '@/components/organisms';
import { productsData } from '@/mocks/ProductsData';

export default function Products() {
	return (
		<main className="flex min-h-screen items-center justify-between">
			<section className="container mx-auto">
				<ProductItemsList products={productsData} />
			</section>
		</main>
	);
}
