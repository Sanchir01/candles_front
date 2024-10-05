import { Header } from '~/widgets/header'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<Header />
			<main>
				<div className='flex items-center justify-center min-w-screen min-h-screen'>
					{children}
				</div>
			</main>
			<div className=''>tes</div>
		</>
	)
}
