import { type Route } from 'next';
import { ActiveLink, type ActiveLinkProps } from '@/components/atoms/ActiveLink';

type NavigationProps = {
	menu: ActiveLinkProps<Route>[];
};

export const Navigation = (props: NavigationProps) => {
	const { menu } = props;

	return (
		<nav>
			<ul className="flex flex-col gap-10 sm:flex-row">
				{menu.map((item, index) => {
					return (
						<li key={index} className="text-center">
							<ActiveLink href={item.href} name={item.name} />
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
