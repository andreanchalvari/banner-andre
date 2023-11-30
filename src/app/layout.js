import { Inter } from 'next/font/google'

import Navbar from "@component/navbar/navbar";
import "@style/global.css";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andrean Chalvari Lambi',
  description: 'Made from PMW 2023',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}