'use server';

import {
	ReviewCreateDocument,
	ReviewPublishDocument,
	ReviewUpdateAverageRatingDocument,
	type ReviewsItemFragment,
} from '@/gql/graphql';
import { ExecutiveGraphql } from '@/utils/ExecutiveGraphql';

export const createReview = async (review: ReviewsItemFragment) => {
	return ExecutiveGraphql({
		query: ReviewCreateDocument,
		variables: {
			...review,
		},
	});
};

export const publishReview = async (reviewID: string) => {
	await ExecutiveGraphql({
		query: ReviewPublishDocument,
		variables: {
			id: reviewID,
		},
	});
};

export const updateAverageRating = async (productId: string, reviews: ReviewsItemFragment[]) => {
	const averageRating = parseInt(
		(reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length).toFixed(0),
	);

	await ExecutiveGraphql({
		query: ReviewUpdateAverageRatingDocument,
		variables: {
			id: productId,
			averageRating: averageRating,
		},
	});
};
