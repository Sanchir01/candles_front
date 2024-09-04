// import { Footer } from '@/widgets/footer/Footer'
// import { Header, HeaderProfileEnum } from '@/widgets/header/Header'
export default async function Layout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<main className='main'>{children}</main>
		</>
	);
}
