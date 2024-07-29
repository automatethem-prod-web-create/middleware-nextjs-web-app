//import { Inter } from 'next/font/google'
import { Poppins } from "next/font/google";
import './globals.css'

//const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: '크랜베리 Ai',
  author: '크랜베리',
  description: '고객 상담 Ai 챗봇/생산성 크롬확장 앱 제작/판매, 마케팅 대행',
  keywords: '고객 상담, Ai 챗봇, 고객 상담 Ai 챗봇, 생산성, 크롬확장, 크롬확장 앱, 생산성 크롬확장 앱, 제작, 판매, 마케팅, 마케팅 대행'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*<body className={inter.className}>{children}</body>*/}
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
