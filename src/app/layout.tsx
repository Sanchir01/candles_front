import type { Metadata } from 'next';

import './globals.css';

export const metadata: Metadata = {
	icons: {
		icon: './favicon.ico',
	},
};
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='ru' suppressHydrationWarning>
			<body>
				<div className='wrapper'>{children}</div>
			</body>
		</html>
	);
}
