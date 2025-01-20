import { Link as LucidLink } from 'lucide-react'
import Link from 'next/link'
import { Button } from './button'

const AdminItemView = ({ href }: { href: string }) => {
	return (
		<Button variant={'ghost'}>
			<Link href={href}>
				<LucidLink />
			</Link>
		</Button>
	)
}

export default AdminItemView
