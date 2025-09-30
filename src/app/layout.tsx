import type { Metadata } from 'next'
import { Rubik, Nunito } from 'next/font/google'
import './globals.css'
import { StoreProvider } from '@/store/StoreProvider'

import TopBar from '@/components/TopBar'

const rubik = Rubik({
	subsets: ['latin'],
	variable: '--font-rubik',
})

const nunito = Nunito({
	subsets: ['latin'],
	variable: '--font-nunito',
})

export const metadata: Metadata = {
	title: 'Wczesnoszkolni.pl',
	description:
		'Zadanie Testowe dla PESI Sp. z o. o. - SD91PL - Stanisław Dziuba',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<StoreProvider>
			<html lang='en'>
				<body
					className={`${rubik.variable} ${nunito.variable} antialiased flex flex-col gap-7.5 overflow-x-hidden`}>
					<TopBar />
					<main className='mx-1 lg:mx-1.5 xl:mx-2'>{children}</main>
				</body>
			</html>
		</StoreProvider>
	)
}
