import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductsList } from '@/api/products';
import { ProductItemsList } from '@/components/organisms/ProductItemsList';
import { Pagination } from '@/components/molecules/Pagination';
import { PageTitle } from '@/components/molecules/PageTitle';

type ProductsPageParams = {
	params: {
		page: string;
	};
};

export const metadata: Metadata = {
	title: 'All products - Next13masters',
};

export default async function ProductsPage({ params }: ProductsPageParams) {
	const { page } = params;
	const first = Number(process.env.PRODUCT_PER_PAGE) || 10;
	const skip = (Number(page) - 1) * first;
	const response = await getProductsList({ first, skip });
	const { products, productsConnection } = response;

	if (!products) return notFound();

	const totalItems = productsConnection.pageInfo.pageSize || 0;

	return (
		<>
			<PageTitle title="All products" />
			<ProductItemsList products={products} />
			<Pagination itemsPerPage={first} totalItems={totalItems} />
		</>
	);
}
