import Link from 'next/link';
import { getCartByFromCookies } from '@/api/cart';

export async function CartLink() {
	const cart = await getCartByFromCookies();
	const quantity = cart?.orderItems.length || 0;

	return (
		<Link href="/cart" className="flex items-center">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				className="h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4l1-12z"
				/>
			</svg>
			<span>{quantity}</span>
		</Link>
	);
}
