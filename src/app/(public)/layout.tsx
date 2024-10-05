import { Header } from '~/widgets/header'
import { Footer } from '~/widgets/footer'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main>{children}</main>
			<div className=''>tes</div>
			<Footer />
		</>
	)
}
