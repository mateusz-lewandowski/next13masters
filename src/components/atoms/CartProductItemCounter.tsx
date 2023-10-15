'use client';

import { experimental_useOptimistic as useOptimistic } from 'react';
import { updateItemQuantity } from '@/actions/cart';

type CartProductItemCounterProps = {
	itemId: string;
	quantity: number;
};

export function CartProductItemCounter(props: CartProductItemCounterProps) {
	const { itemId, quantity } = props;
	const [optimisticQuantity, setOptimisticQuantity] = useOptimistic(quantity);

	return (
		<form className="flex">
			<button
				className="h-6 w-6 border"
				type="submit"
				data-testid="decrement"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity - 1);
					await updateItemQuantity(itemId, optimisticQuantity - 1);
				}}
			>
				-
			</button>
			<span className="w-8 text-center" data-testid="quantity">
				{optimisticQuantity}
			</span>
			<button
				className="h-6 w-6 border"
				type="submit"
				data-testid="increment"
				formAction={async () => {
					setOptimisticQuantity(optimisticQuantity + 1);
					await updateItemQuantity(itemId, optimisticQuantity + 1);
				}}
			>
				+
			</button>
		</form>
	);
}
