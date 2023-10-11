import { type TypedDocumentString } from '@/gql/graphql';

export const ExecutiveGraphql = async <TResult, TVariable>(
	query: TypedDocumentString<TResult, TVariable>,
	variables: TVariable,
): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) throw TypeError('GRAPHQL_URL is not defined');

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ query, variables }),
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphglResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphglResponse.errors) throw TypeError(`GraphQL Error`, { cause: graphglResponse.errors });

	return graphglResponse.data;
};
