import { redirect } from 'next/navigation';
import { getCartByFromCookies } from '@/api/cart';
import { formatMoney } from '@/utils/FormatMoney';
import { CartProductItemCounter } from '@/components/atoms/CartProductItemCounter';
import { RemoveButton } from '@/components/atoms/RemoveButton';

export default async function CartPage() {
	const cart = await getCartByFromCookies();

	if (!cart || !cart.orderItems[0]) return redirect('/');

	return (
		<div>
			<h1>Order #{cart.id} summary</h1>
			<table>
				<thead>
					<tr>
						<th>Product</th>
						<th>Quantity</th>
						<th>Price</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					{cart.orderItems.map((item) => {
						if (!item.product) {
							return null;
						}
						return (
							<tr key={item.product.id}>
								<td>{item.product.name}</td>
								<td>
									<CartProductItemCounter itemId={item.id} quantity={item.quantity} />
								</td>
								<td>{formatMoney(item.product.price)}</td>
								<td>
									<RemoveButton itemId={item.id} />
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
