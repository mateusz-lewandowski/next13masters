import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductByCategorySlug } from '@/api/products';
import { ProductItemsList } from '@/components/organisms/ProductItemsList';
import { Pagination } from '@/components/molecules/Pagination';
import { PageTitle } from '@/components/molecules/PageTitle';

type CategoriesPageParams = {
	params: {
		slug: string;
		page: string;
	};
};

export const generateMetadata = async ({ params }: CategoriesPageParams): Promise<Metadata> => {
	const { slug } = params;
	const response = await getProductByCategorySlug({ slug });
	const { categories } = response;

	if (!categories[0]) throw notFound();

	return {
		title: `Next13masters - ${categories[0].name}`,
		description: categories[0].description,
	};
};

export default async function CategoriesPage({ params }: CategoriesPageParams) {
	const { slug, page } = params;
	const first = Number(process.env.PRODUCT_PER_PAGE) || 10;
	const skip = (Number(page) - 1) * first;
	const response = await getProductByCategorySlug({ slug, first, skip });
	const { categories, productsConnection } = response;

	if (!categories[0]) throw notFound();

	const product = categories[0].products;
	const totalItems = productsConnection.pageInfo.pageSize || 0;

	return (
		<>
			<PageTitle title={categories[0].name} />
			<ProductItemsList products={product} />
			<Pagination itemsPerPage={first} totalItems={totalItems} />
		</>
	);
}
