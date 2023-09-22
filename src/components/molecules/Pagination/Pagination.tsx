import { NavigationItemLink } from '@/components/atoms';
import { type PaginationProps } from '@components/molecules';

export const Pagination = (props: PaginationProps) => {
	const { itemsPerPage, totalItems } = props;
	const pagesCount = Math.ceil(totalItems / itemsPerPage);

	if (pagesCount === 1) return null;

	const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);

	return (
		<nav
			className="mt-8 flex items-center justify-center border-t border-neutral-200"
			aria-label="pagination"
		>
			<ul className="mt-8 flex flex-wrap justify-center">
				{pages.map((page) => (
					<li key={page} className="mx-2">
						<NavigationItemLink href={`/products/${page}`} name={page.toString()} />
					</li>
				))}
			</ul>
		</nav>
	);
};
