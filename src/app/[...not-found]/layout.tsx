// import { Footer } from '@/widgets/footer/Footer'
import { Header } from '../../widgets/header/Header'
export default async function Layout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main className='main'>{children}</main>
		</>
	)
}
