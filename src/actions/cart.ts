'use server';

import { revalidateTag } from 'next/cache';
import { CartUpdateItemQuantityDocument, CartRemoveProductDocument } from '@/gql/graphql';
import { ExecutiveGraphql } from '@/utils/ExecutiveGraphql';

export const removeItem = async (itemId: string) => {
	return ExecutiveGraphql({
		query: CartRemoveProductDocument,
		variables: { itemId },
	});
};

export const updateItemQuantity = async (itemId: string, quantity: number) => {
	return ExecutiveGraphql({
		query: CartUpdateItemQuantityDocument,
		variables: { itemId, quantity },
		cache: 'no-store',
	});

	revalidateTag('cart');
};
