import Link from 'next/link'
import {
   Pagination,
   PaginationContent,
   PaginationEllipsis,
   PaginationItem,
   PaginationLink,
   PaginationNext,
   PaginationPrevious
} from '~/shared/ui/pagination'

export function PaginationCatalog() {
   return (
      <Pagination>
         <PaginationContent>
            <PaginationItem>
               <PaginationPrevious href='#' />
            </PaginationItem>
            <PaginationItem>
               <Link href='#'>1</Link>
            </PaginationItem>
            <PaginationItem>
               <PaginationLink href='#' isActive>
                  2
               </PaginationLink>
            </PaginationItem>
            <PaginationItem>
               <PaginationLink href='#'>3</PaginationLink>
            </PaginationItem>
            <PaginationItem>
               <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
               <PaginationNext href='#' />
            </PaginationItem>
         </PaginationContent>
      </Pagination>
   )
}
