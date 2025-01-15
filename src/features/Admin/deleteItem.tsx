import { useMutation } from '@tanstack/react-query'

import { Trash2 } from 'lucide-react'
import { queryClient } from '~/shared/api/api'
import { tryThrow } from '~/shared/lib/utils'
import { Button } from '~/shared/ui'
export const DeleteItem = ({
   id,
   mutateKey,
   invalidateKey,
   mutateFn
}: {
   id: string
   mutateKey: string
   invalidateKey?: string
   mutateFn: (id: string) => Promise<any>
}) => {
   const { mutateAsync } = useMutation({
      mutationKey: [mutateKey],
      mutationFn: mutateFn,
      onSuccess: () => {
         queryClient.invalidateQueries({ queryKey: [invalidateKey] })
      }
   })
   const deleteItem = async () => {
      tryThrow(await mutateAsync(id))
   }
   return (
      <Button onClick={() => deleteItem} variant={'ghost'}>
         <Trash2 className='text-red-700 cursor-pointer' />
      </Button>
   )
}
