import { GraphQLClient } from 'graphql-request'

export const gqlRequest = new GraphQLClient(
	process.env.SERVER_GRAPHQL
		? process.env.SERVER_GRAPHQL
		: 'http://localhost:5000',
	{
		credentials: 'include'
	}
)
