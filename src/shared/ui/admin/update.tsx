import { Pencil } from 'lucide-react'
import Link from 'next/link'
import { Button } from '../button'

export const UpdateLink = ({ href }: { href: string }) => {
	return (
		<Button variant={'ghost'}>
			<Link href={href}>
				<Pencil className='text-aqua-500' />
			</Link>
		</Button>
	)
}
