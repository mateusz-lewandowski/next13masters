import { revalidateTag } from 'next/cache';
import { SubmitButton } from '../molecules/SubmitButton';
import { type ProductItemFragment } from '@/gql/graphql';
import { getOrCreateCart, addToCart } from '@/api/cart';

export const ProductItemAddToCard = (props: { product: ProductItemFragment }) => {
	const { product } = props;

	async function addToCartAction() {
		'use server';

		const cart = await getOrCreateCart();

		await addToCart(cart, product);

		revalidateTag('cart');
	}

	return (
		<form action={addToCartAction}>
			<SubmitButton data-testid="add-to-cart-button">Add to cart</SubmitButton>
		</form>
	);
};
