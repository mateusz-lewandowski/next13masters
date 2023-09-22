'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import { type NavigationItemLinkProps } from '@components/atoms';

export const NavigationItemLink = (props: NavigationItemLinkProps) => {
	const {
		name,
		href,
		className = 'font-medium text-gray-950 hover:text-gray-800',
		activeClassName = 'font-semibold underline',
		exact = false,
	} = props;
	const pathname = usePathname();
	const path = exact ? `/${pathname.split('/')[1]}` : pathname;
	const isActive = path === href;

	return (
		<Link
			href={{ pathname: href }}
			className={clsx(className, {
				[activeClassName]: isActive,
			})}
			aria-current={isActive ? 'page' : undefined}
		>
			{name}
		</Link>
	);
};
