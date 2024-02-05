import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const reckless = localFont({
  src: [{
    path: './assets/RecklessNeue-Regular.woff2',
    weight: '400',
    style: 'normal',
  }]
})

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dan Mace | aBit',
  description: 'Co-own Content with your Favourite Creatore',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
