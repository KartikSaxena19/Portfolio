import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
<style>
@import url('https://fonts.googleapis.com/css2?family=Baloo+Bhaijaan+2:wght@400..800&family=Kalam:wght@300;400;700&family=Kaushan+Script&family=Martel+Sans:wght@200;300;400;600;700;800;900&family=Racing+Sans+One&display=swap');
</style>
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Kartik Saxena",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {children}
      </body>
    </html>
  );
}
