import { GraphQLClient } from 'graphql-request'

export const gqlRequest = new GraphQLClient(
   process.env.SERVER_URL ? process.env.SERVER_URL : 'http://localhost:5000',
   {
      credentials: 'include',
      next: { revalidate: 1000 }
   }
)
