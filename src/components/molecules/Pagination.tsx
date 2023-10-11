'use client';

import { type Route } from 'next';
import { usePathname } from 'next/navigation';
import { ActiveLink } from '@/components/atoms/ActiveLink';

type PaginationProps = {
	itemsPerPage: number;
	totalItems: number;
};

export const Pagination = (props: PaginationProps) => {
	const { itemsPerPage, totalItems } = props;
	const pathname = usePathname();
	const pagesCount = Math.ceil(totalItems / itemsPerPage);

	if (pagesCount === 1) return null;

	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
	const url = pathname.slice(0, -1) || '';

	return (
		<nav
			className="mt-8 flex items-center justify-center border-t border-neutral-200"
			aria-label="pagination"
		>
			<ul className="mt-8 flex flex-wrap justify-center">
				{pages.map((page) => (
					<li key={page} className="mx-2">
						<ActiveLink href={`${url}${page}` as Route} name={page.toString()} />
					</li>
				))}
			</ul>
		</nav>
	);
};
