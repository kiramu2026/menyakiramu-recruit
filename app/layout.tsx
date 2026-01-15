import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_JP, Shippori_Mincho_B1, Yusei_Magic } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
})

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-noto-sans-jp",
})

const shipporiMincho = Shippori_Mincho_B1({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-shippori-mincho",
})

const yuseiMagic = Yusei_Magic({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-yusei-magic",
})

export const metadata: Metadata = {
  title: "採用情報 | 麺屋 希楽夢 - 湯気の立つ仕事を、あなたと。",
  description:
    "ラーメン店「麺屋 希楽夢」の採用ページです。ホール・キッチン・仕込みスタッフを募集中。未経験歓迎、柔軟なシフト、温かいチームで一緒に働きませんか。",
  generator: "v0.app",
  keywords: ["ラーメン店", "求人", "採用", "アルバイト", "希楽夢", "飲食店", "バイト募集"],
  openGraph: {
    title: "採用情報 | 麺屋 希楽夢",
    description: "湯気の立つ仕事を、あなたと。未経験歓迎、柔軟なシフトで働きやすい環境です。",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Zen+Kurenaido&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" />
      </head>
      <body className={`${inter.variable} ${notoSansJP.variable} ${shipporiMincho.variable} ${yuseiMagic.variable}`}>
        {children}
      </body>
    </html>
  )
}
