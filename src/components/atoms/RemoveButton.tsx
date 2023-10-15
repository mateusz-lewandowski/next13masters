'use client';

import { useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { removeItem } from '@/actions/cart';

type RemoveButtonProps = {
	itemId: string;
};

export const RemoveButton = (props: RemoveButtonProps) => {
	const { itemId } = props;
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	return (
		<button
			className="h-6 w-6 border"
			disabled={isPending}
			onClick={() =>
				startTransition(async () => {
					await removeItem(itemId);
					router.refresh();
				})
			}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				strokeWidth={2}
			>
				<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
			</svg>
		</button>
	);
};
