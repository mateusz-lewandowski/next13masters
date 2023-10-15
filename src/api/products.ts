import { notFound } from 'next/navigation';
import { ExecutiveGraphql } from '@/utils/ExecutiveGraphql';
import {
	ProductGetByIdDocument,
	ProductsGetByCategorySlugDocument,
	ProductsGetListDocument,
	ProductsGetByCollectionSlugDocument,
	type ProductOrderByInput,
} from '@/gql/graphql';

export const getProductsList = async (params: {
	query?: string;
	first?: number;
	skip?: number;
	orderBy?: ProductOrderByInput;
}) => {
	const { products, productsConnection } = await ExecutiveGraphql({
		query: ProductsGetListDocument,
		variables: {
			query: params.query || '',
			first: params.first,
			skip: params.skip,
			orderBy: params.orderBy || 'createdAt_ASC',
		},
		next: { tags: ['product'] },
	});

	if (!products && !productsConnection) notFound();

	return { products, productsConnection };
};

export const getProductById = async (params: { productId: string }) => {
	const { product } = await ExecutiveGraphql({
		query: ProductGetByIdDocument,
		variables: { id: params.productId },
		next: { tags: ['product'] },
	});

	if (!product) notFound();

	return product;
};

export const getProductByCategorySlug = async (params: {
	slug: string;
	first?: number;
	skip?: number;
}) => {
	const { categories, productsConnection } = await ExecutiveGraphql({
		query: ProductsGetByCategorySlugDocument,
		variables: {
			slug: params.slug,
			first: params.first,
			skip: params.skip,
		},
	});

	if (!categories && !productsConnection) notFound();

	return { categories, productsConnection };
};

export const getProductByCollectionSlug = async (params: { slug: string }) => {
	const { collections } = await ExecutiveGraphql({
		query: ProductsGetByCollectionSlugDocument,
		variables: { slug: params.slug },
	});

	if (!collections) notFound();

	return collections;
};
