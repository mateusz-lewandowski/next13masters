import { notFound } from 'next/navigation';
import { ExecutiveGraphql } from '@/utils/ExecutiveGraphql';
import { CategoriesGetListDocument } from '@/gql/graphql';

export const getCategoriesList = async () => {
	const { categories } = await ExecutiveGraphql(CategoriesGetListDocument, {});

	if (!categories) notFound();

	return categories;
};
