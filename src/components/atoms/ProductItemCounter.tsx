'use client';

import { useState } from 'react';

export const ProductItemCounter = () => {
	const [counter, setCounter] = useState(1);

	return (
		<div>
			<label htmlFor="qty">Quantity</label>
			<button onClick={() => setCounter(counter > 1 ? counter - 1 : 1)}>-</button>
			<input id="qty" type="text" readOnly value={counter} />
			<button onClick={() => setCounter(counter + 1)}>-</button>
		</div>
	);
};
