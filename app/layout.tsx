import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Menu Cost Optimizer — Calculate Real Profit Per Menu Item',
  description: 'Track ingredient costs and portion sizes to discover which menu items are actually profitable vs just popular. Built for restaurant owners and managers.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5fc548dd-2699-4f5b-bcc1-d486691c18d0"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
