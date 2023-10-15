import { cookies } from 'next/headers';
import {
	type CartFragment,
	CartGetByIdDocument,
	CartCreateDocument,
	type ProductItemFragment,
	CartUpsertProductDocument,
} from '@/gql/graphql';
import { ExecutiveGraphql } from '@/utils/ExecutiveGraphql';

export async  function getOrCreateCart(): Promise<CartFragment> {
	const existingCart = await getCartByFromCookies();

	if (existingCart) {
		return existingCart;
	}

	const cart = await createCart();

	if (!cart.createOrder) {
		throw new Error('Failed to create cart');
	}

	cookies().set('cartId', cart.createOrder.id, {
		httpOnly: true,
		sameSite: 'lax',
		//secure: true,
	});

	return cart.createOrder;
}

export async function getCartByFromCookies() {
	const cartId = cookies().get('cartId')?.value;

	if (cartId) {
		const cart = await ExecutiveGraphql({
			query: CartGetByIdDocument,
			variables: { id: cartId },
			cache: 'no-store',
			next: { tags: ['cart'] },
		});

		if (cart.order) {
			return cart.order;
		}
	}
}

export async function createCart() {
	return ExecutiveGraphql({ query: CartCreateDocument, variables: {}, cache: 'no-store' });
}

export async function addToCart(cart: CartFragment, product: ProductItemFragment) {
	const productId = product.id;
	const productInCart = cart.orderItems.find((item) =>
		item.product?.id === productId ? item : null,
	);

	return ExecutiveGraphql({
		query: CartUpsertProductDocument,
		variables: {
			cartId: cart.id,
			productId: productId,
			orderItemId: productInCart ? productInCart.id : null,
			quantity: productInCart ? productInCart.quantity + 1 : 1,
			total: productInCart ? productInCart.total * (productInCart.quantity + 1) : product.price,
		},
		cache: 'no-store',
	});
}
