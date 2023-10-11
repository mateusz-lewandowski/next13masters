'use client';

import { type UrlObject } from 'url';
import { type Route } from 'next';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

export type ActiveLinkProps<T extends string> = {
	name: string;
	href: Route<T> | UrlObject;
	exact?: boolean;
};

export const ActiveLink = <T extends string>(props: ActiveLinkProps<T>) => {
	const { name, href, exact = true } = props;
	const pathname = usePathname();
	const path = typeof href === 'string' ? href : href.pathname || '';
	const isActive = exact ? pathname === path : path === `/${pathname.split('/')[1]}`;

	return (
		<Link
			href={href}
			className={clsx('border-b-2 px-2 text-gray-950 hover:text-gray-800', {
				['border-transparent font-medium']: !isActive,
				['border-gray-950 font-semibold']: isActive,
			})}
			aria-current={isActive ? 'page' : undefined}
		>
			{name}
		</Link>
	);
};
