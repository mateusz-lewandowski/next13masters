import { type Metadata } from 'next';
import { type ProductsPageParams } from './type';
import { getProducts } from '@api/products';
import { Pagination, ProductItemsList } from '@components/organisms';

const itemsPerPage = 8;

export const metadata: Metadata = {
	title: 'Products - Next13masters',
};

export async function generateStaticParams() {
	const products = await getProducts();
	const pagesCount = Math.ceil(products.length / itemsPerPage);
	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	return pages.map((page) => ({ page: page.toString() }));
}

export default async function ProductsPage({ params }: ProductsPageParams) {
	const currentPage = parseInt(params.page);
	const totalProducts = await getProducts();
	const startIndex = (currentPage - 1) * itemsPerPage;
	const products = totalProducts.slice(startIndex, startIndex + itemsPerPage);

	return (
		<>
			<ProductItemsList products={products} />
			<Pagination itemsPerPage={itemsPerPage} totalItems={totalProducts.length} />
		</>
	);
}
