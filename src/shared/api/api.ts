import { QueryClient } from '@tanstack/react-query'
export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
         retry: 5,
         retryDelay: 2000,
         staleTime: 5 * 60 * 1000
      }
   }
})
