export default async function Layout({
	children
}: {
	children: React.ReactNode
}) {
	return (
		<>
			<main className='main'>{children}</main>
		</>
	)
}
