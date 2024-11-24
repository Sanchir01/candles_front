import { QueryClient } from '@tanstack/react-query'
//todo:switch time 1 mitnute 1*60*1000
export const queryClient = new QueryClient({
   defaultOptions: {
      queries: {
         refetchOnWindowFocus: false,
         retry: 5,
         retryDelay: 2000,

         staleTime: 0
      }
   }
})
