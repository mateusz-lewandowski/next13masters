import { type Metadata } from 'next';
import { PageTitle } from '@/components/molecules/PageTitle';
import { getProductsList } from '@/api/products';
import { ProductItemsList } from '@/components/organisms/ProductItemsList';

type SearchPageParams = {
	searchParams: {
		query: string;
	};
};

export const generateMetadata = async ({ searchParams }: SearchPageParams): Promise<Metadata> => {
	const { query } = searchParams;

	return {
		title: `Next13masters - Search: ${query}`,
	};
};

export default async function SearchPage({ searchParams }: SearchPageParams) {
	const { query } = searchParams;
	const response = await getProductsList({ query });
	const { products, productsConnection } = response;
	const totalItems = productsConnection.pageInfo.pageSize || 0;

	return (
		<>
			<PageTitle title={`Found ${totalItems} items for phrase "${query}"`} />
			<ProductItemsList products={products} />
		</>
	);
}
