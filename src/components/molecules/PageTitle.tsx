import { Heading } from '../atoms/Heading';

type PageTitleProps = {
	title: string;
	children?: React.ReactNode;
};

export const PageTitle = (props: PageTitleProps) => {
	const { title, children } = props;

	return (
		<div className="mb-10 bg-gray-100">
			<div className="container mx-auto px-4">
				<div className="mx-auto flex items-center justify-between py-8">
					<Heading title={title} />
					{children}
				</div>
			</div>
		</div>
	);
};
