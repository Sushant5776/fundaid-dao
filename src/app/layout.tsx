import './globals.css'

export const metadata = {
	title: 'Fundaid DAO',
	description:
		'Decentralize your giving with FundaidDAO – where every donation counts.',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
