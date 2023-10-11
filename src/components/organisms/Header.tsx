import { Navigation } from '@/components/molecules/Navigation';
import { NavigationData } from '@/mocks/NavigationData';
import { Search } from '@/components/molecules/Search';

export const Header = () => {
	return (
		<header>
			<div className="container mx-auto flex flex-col flex-wrap items-center justify-between gap-10 px-4 py-7 md:flex-row">
				<Navigation menu={NavigationData} />
				<Search />
			</div>
		</header>
	);
};
