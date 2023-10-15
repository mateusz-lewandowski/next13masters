'use client';

import { experimental_useFormStatus as useFormStatus } from 'react-dom';
import { type ReactNode } from 'react';
import { Button } from '@/components/atoms/Button';

export const SubmitButton = (props: { children: ReactNode }) => {
	const { children, ...buttonAttributes } = props;
	const { pending } = useFormStatus();

	return (
		<Button type="submit" disabled={pending} {...buttonAttributes}>
			{children}
		</Button>
	);
};
