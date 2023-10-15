'use client';

import { type Route } from 'next';
import { usePathname, useSearchParams } from 'next/navigation';
import { ActiveLink } from '@/components/atoms/ActiveLink';

type PaginationProps = {
	itemsPerPage: number;
	totalItems: number;
};

export const Pagination = (props: PaginationProps) => {
	const { itemsPerPage, totalItems } = props;
	const pathname = usePathname();
	const searchParams = useSearchParams();
	const pagesCount = Math.ceil(totalItems / itemsPerPage);
	const params =
		(searchParams.get('product_list_order') &&
			`?product_list_order=${searchParams.get('product_list_order')}`) ||
		'';

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
						<ActiveLink
							href={`${url}${page}${params}` as Route}
							name={page.toString()}
							exact={true}
						/>
					</li>
				))}
			</ul>
		</nav>
	);
};
