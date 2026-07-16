import { Analytics } from '@vercel/analytics/next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Signature Slam Academy | Grow Your Game With The Professionals',
  description:
    'SSA Hunter Valley — the first one-stop tennis academy in the Asia Pacific. Adopt. Nurture. Deliver. 60 multi-surface courts, world-class coaches and facilities.',
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#a3cd3a',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
