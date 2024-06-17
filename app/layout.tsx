import type { Metadata } from 'next'
import { Manrope } from 'next/font/google'

import '@/shared/styles/globals.css'

const inter = Manrope({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata: Metadata = {
    title: 'Testing',
    description: 'Testing',
}

//https://hh.ru/vacancy/101650724?hhtmFrom=vacancy_search_list

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='ru'>
            <body className={inter.className}>{children}</body>
        </html>
    )
}
