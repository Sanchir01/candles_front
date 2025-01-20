import { SidebarInset } from '~/shared/ui/sidebar'

export default function RootLayout({
	children
}: {
	children: React.ReactNode
}) {
	return <SidebarInset>{children}</SidebarInset>
}
