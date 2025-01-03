import { QueryClient } from '@tanstack/react-query'
export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
         retry: 5,
         retryDelay: 2000,
         staleTime: process.env.NODE_ENV === 'production' ? 3600 : 0
      }
   }
})
