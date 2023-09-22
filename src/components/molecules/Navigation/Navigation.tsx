import { NavigationItemLink } from '@components/atoms';
import { type NavigationProps } from '@components/molecules';

export const Navigation = (props: NavigationProps) => {
	const { menu } = props;

	return (
		<nav>
			<ul className="flex flex-col justify-center gap-10 py-7 sm:flex-row">
				{menu.map((item, index) => {
					return (
						<li key={index} className="text-center">
							<NavigationItemLink href={item.href} name={item.name} exact={true} />
						</li>
					);
				})}
			</ul>
		</nav>
	);
};
