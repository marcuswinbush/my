import './globals.css'
import type { Metadata } from 'next'
import Header from './Components/Header'



export const metadata: Metadata = {
  title: 'My Ecommerce',
  description: 'An efficient way to find your best style ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='font-bodyFont'>
        {children}</body>
    </html>
  )
}
