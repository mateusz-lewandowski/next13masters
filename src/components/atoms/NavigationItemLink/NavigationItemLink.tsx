'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { type NavigationItemLinkProps } from '@components/atoms';

export const NavigationItemLink = (props: NavigationItemLinkProps) => {
	const { name, href, partialMatching = false } = props;
	const pathname = usePathname();
	const path = partialMatching ? `/${pathname.split('/')[1]}` : pathname;
	const isActive = path === href;

	return (
		<Link
			href={{ pathname: href }}
			className={clsx(`font-medium text-gray-950 hover:text-gray-800`, {
				'font-semibold underline': isActive,
			})}
			aria-current={isActive ? 'page' : undefined}
		>
			{name}
		</Link>
	);
};
