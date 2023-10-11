import { Heading } from '../atoms/Heading';

type PageTitleProps = {
	title: string;
};

export const PageTitle = (props: PageTitleProps) => {
	const { title } = props;

	return (
		<div className="mb-10 bg-gray-100">
			<div className="container mx-auto px-4">
				<div className="mx-auto py-8">
					<Heading title={title} />
				</div>
			</div>
		</div>
	);
};
