import { Navigation } from '@components/molecules';
import { NavigationData } from '@mocks/NavigationData';

export const Header = () => {
	return (
		<header>
			<div className="container mx-auto px-4">
				<Navigation menu={NavigationData}/>
			</div>
		</header>
	);
};
