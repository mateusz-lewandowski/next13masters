import { notFound } from 'next/navigation';
import { ExecutiveGraphql } from '@/utils/ExecutiveGraphql';
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductsGetByCollectionSlugDocument,
} from '@/gql/graphql';

export const getProductsList = async (params: {
	query?: string;
	first?: number;
	skip?: number;
}) => {
	const { products, productsConnection } = await ExecutiveGraphql(ProductsGetListDocument, {
		query: params.query || '',
		first: params.first,
		skip: params.skip,
	});

	if (!products && !productsConnection) notFound();

	return { products, productsConnection };
};

export const getProductById = async (params: { productId: string }) => {
	const { product } = await ExecutiveGraphql(ProductGetByIdDocument, {
		id: params.productId,
	});

	if (!product) notFound();

	return product;
};

export const getProductByCategorySlug = async (params: {
	slug: string;
	first?: number;
	skip?: number;
}) => {
	const { categories, productsConnection } = await ExecutiveGraphql(
		ProductsGetByCategorySlugDocument,
		{
			slug: params.slug,
			first: params.first,
			skip: params.skip,
		},
	);

	if (!categories && !productsConnection) notFound();

	return { categories, productsConnection };
};

export const getProductByCollectionSlug = async (params: { slug: string }) => {
	const { collections } = await ExecutiveGraphql(ProductsGetByCollectionSlugDocument, {
		slug: params.slug,
	});

	if (!collections) notFound();

	return collections;
};
