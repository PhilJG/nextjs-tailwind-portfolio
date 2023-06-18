import './globals.css'
import { Inter } from 'next/font/google'
import { Providers } from './providers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PhilJGray.ca',
  description: 'A portfolio built with Next.js and Tailwind.css',
}

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <head />
      <body className="flex flex-col min-h-screen dark:bg-gray-800 md:px-12 bg-blue-50 px-5">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
