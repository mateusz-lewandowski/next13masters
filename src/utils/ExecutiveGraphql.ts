import { type TypedDocumentString } from '@/gql/graphql';

type ExecutiveGraphqlProps<TResult, TVariable> = {
	query: TypedDocumentString<TResult, TVariable>;
	variables: TVariable;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
};

export const ExecutiveGraphql = async <TResult, TVariable>(
	props: ExecutiveGraphqlProps<TResult, TVariable>,
): Promise<TResult> => {
	const { query, variables, next, cache } = props;

	if (!process.env.GRAPHQL_URL) throw TypeError('GRAPHQL_URL is not defined');
	if (!process.env.HYGRAPH_TOKEN) throw TypeError('HYGRAPH_TOKEN is not defined');

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${process.env.HYGRAPH_TOKEN}`,
			'Content-Type': 'application/json',
		},
		next,
		cache,
		body: JSON.stringify({ query, variables }),
	});

	type GraphQLResponse<T> =
		| { data?: undefined; errors: { message: string }[] }
		| { data: T; errors?: undefined };

	const graphglResponse = (await res.json()) as GraphQLResponse<TResult>;

	if (graphglResponse.errors) {
		console.log(graphglResponse.errors);
		throw TypeError(`GraphQL Error`, { cause: graphglResponse.errors });
	}

	return graphglResponse.data;
};
