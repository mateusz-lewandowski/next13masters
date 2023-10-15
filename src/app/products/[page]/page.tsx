import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductsList } from '@/api/products';
import { ProductItemsList } from '@/components/organisms/ProductItemsList';
import { Pagination } from '@/components/molecules/Pagination';
import { PageTitle } from '@/components/molecules/PageTitle';
import { SotrProducts } from '@/components/atoms/SortProducts';
import { type ProductOrderByInput } from '@/gql/graphql';

type ProductsPageParams = {
	params: {
		page: string;
	};
	searchParams: {
		product_list_order: string;
	};
};

export const metadata: Metadata = {
	title: 'All products - Next13masters',
};

export default async function ProductsPage({ params, searchParams }: ProductsPageParams) {
	const { page } = params;
	const { product_list_order } = searchParams;
	const first = Number(process.env.PRODUCT_PER_PAGE) || 10;
	const skip = (Number(page) - 1) * first;
	const orderBy = (product_list_order || 'name_ASC') as ProductOrderByInput;
	const response = await getProductsList({ first, skip, orderBy });
	const { products, productsConnection } = response;

	if (!products) throw notFound();

	const totalItems = productsConnection.pageInfo.pageSize || 0;

	return (
		<>
			<PageTitle title="All products">
				<SotrProducts defaultOrderBy={orderBy} />
			</PageTitle>
			<ProductItemsList products={products} />
			<Pagination itemsPerPage={first} totalItems={totalItems} />
		</>
	);
}
