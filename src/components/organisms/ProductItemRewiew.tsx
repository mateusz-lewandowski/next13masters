import { type ProductItemFragment } from '@/gql/graphql';
import { ProductItemReviewForm } from '@/components/molecules/ProductItemReviewForm';
import { ProductItemReviewList } from '@/components/molecules/ProductItemReviewList';

export const ProductItemReview = async (props: { product: ProductItemFragment }) => {
	const { product } = props;

	return (
		<div className="container mx-auto py-4">
			<div className="flex flex-wrap gap-4">
				<div className="flex-1">
					<ProductItemReviewForm product={product} />
				</div>
				<div className="flex-1">
					<ProductItemReviewList product={product} />
				</div>
			</div>
		</div>
	);
};
