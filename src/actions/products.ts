'use server';

import { ProductPublishDocument } from '@/gql/graphql';
import { ExecutiveGraphql } from '@/utils/ExecutiveGraphql';

export const publishProduct = async (productId: string) => {
	return ExecutiveGraphql({
		query: ProductPublishDocument,
		variables: {
			id: productId,
		},
	});
};
