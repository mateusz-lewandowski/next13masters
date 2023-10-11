'use client';

import { type UrlObject } from 'url';
import { type Route } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export type ActiveLinkProps<T> = {
	name: string;
	href: Route<T> | UrlObject;
	exact?: boolean;
};

export const ActiveLink = <T extends string>(props: ActiveLinkProps<T>) => {
	const { name, href, exact = true } = props;
	const pathname = usePathname();
	const path = typeof href === 'string' ? href : href.pathname || '';
	const isActive = exact ? pathname === path : `/${pathname.split('/')[1]}`;

	return (
		<Link
			href={href}
			className={clsx(
				'border-b-2 border-transparent px-2 font-medium text-gray-950 hover:text-gray-800',
				{
					['border-gray-950 font-semibold']: isActive,
				},
			)}
			aria-current={isActive ? 'page' : undefined}
		>
			{name}
		</Link>
	);
};
