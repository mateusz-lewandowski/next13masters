import { type Route } from 'next';
import { ActiveLink, type ActiveLinkProps } from '@/components/atoms/ActiveLink';

type NavigationProps<T> = {
	menu: ActiveLinkProps<T>[];
};

export const Navigation = (props: NavigationProps<T>) => {
	const { menu } = props;

	return (
		<nav>
			<ul className="flex flex-col gap-10 sm:flex-row">
				{menu.map((item, index) => {
					return (
						<li key={index} className="text-center">
							<ActiveLink href={item.href as Route} name={item.name} />
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
