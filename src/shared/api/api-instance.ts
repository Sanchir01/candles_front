import { GraphQLClient } from 'graphql-request'

export const gqlRequest = new GraphQLClient(
   process.env.NEXT_PUBLIC_SERVER_URL
      ? (process.env.NEXT_PUBLIC_SERVER_URL as string)
      : 'http://localhost:5000',
   {
      credentials: 'include',
      next: { revalidate: 60 },
      cache: 'no-cache'
   }
)
