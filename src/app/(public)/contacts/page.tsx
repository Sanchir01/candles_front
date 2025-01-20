import { NextPage } from 'next'
import Link from 'next/link'
import { Container } from '~/shared/ui'

const ContactsPage: NextPage = () => {
	return (
		<div className=''>
			<Container>
				<div className='flex mt-10'>
					<Link href={'https://t.me/mahakala08'}>мы в telegram</Link>
					<Link href={'/catalog'}>мы в вк</Link>
					<Link href={'/catalog'}>мы в вб</Link>
				</div>
			</Container>
		</div>
	)
}

export default ContactsPage
