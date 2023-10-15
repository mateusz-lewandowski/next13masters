import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getProductByCollectionSlug } from '@/api/products';
import { ProductItemsList } from '@/components/organisms/ProductItemsList';
import { PageTitle } from '@/components/molecules/PageTitle';

type CollectionsPageParams = {
	params: {
		slug: string;
	};
};

export const generateMetadata = async ({ params }: CollectionsPageParams): Promise<Metadata> => {
	const { slug } = params;
	const collections = await getProductByCollectionSlug({ slug });

	if (!collections[0]) throw notFound();

	return {
		title: `Next13masters - Collection: ${collections[0].name}`,
		description: collections[0].description,
	};
};

export default async function CollectionsPage({ params }: CollectionsPageParams) {
	const { slug } = params;
	const collections = await getProductByCollectionSlug({ slug });

	if (!collections[0]) throw notFound();

	const product = collections[0].products;

	return (
		<>
			<PageTitle title={collections[0].name} />
			<ProductItemsList products={product} />
		</>
	);
}
