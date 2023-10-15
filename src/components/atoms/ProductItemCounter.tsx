'use client';

import { useState } from 'react';

type ProductItemCounterProps = {
	quantity?: number;
};

export const ProductItemCounter = (props: ProductItemCounterProps) => {
	const { quantity = 1 } = props;

	const [counter, setCounter] = useState(quantity);

	return (
		<div className="flex gap-2">
			<label htmlFor="qty">Qty</label>
			<div className="flex max-w-[60px] border border-gray-900">
				<button
					className="flex-grow border-r border-gray-900"
					onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}
				>
					-
				</button>
				<input id="qty" className="w-full text-center" type="text" readOnly value={counter} />
				<button
					className="flex-grow border-l border-gray-900"
					onClick={() => setCounter(counter + 1)}
				>
					+
				</button>
			</div>
		</div>
	);
};
