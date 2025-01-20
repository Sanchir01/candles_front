import { GraphQLClient } from 'graphql-request'

export const gqlRequest = new GraphQLClient(
	process.env.NODE_ENV === 'production'
		? (process.env.NEXT_PUBLIC_SERVER_URL as string)
		: 'http://localhost:5000',
	{
		credentials: 'include'
	}
)
