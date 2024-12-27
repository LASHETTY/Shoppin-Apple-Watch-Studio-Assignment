import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import '../styles/globals.css'
import { WatchProvider } from '@/context/WatchContext'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Providers from '@/components/Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Apple Watch Studio',
  description: 'Customize your Apple Watch',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-white dark:bg-black text-black dark:text-white`}>
        <Providers>
          <WatchProvider>
            <Header />
            <main>{children}</main>
            <Footer />
          </WatchProvider>
        </Providers>
      </body>
    </html>
  )
}
