import "@/app/globals.css"
import Header from "./components/header"
// import Header from "./header/page"
import Footer from "./components/footer"


import { Manrope } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const manrope = Manrope({ subsets: ['latin'] })


export default function RootLayout({
  children,
  cartModal
}: Readonly<{
  children: React.ReactNode
  cartModal: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={manrope.className}
      >
        {cartModal}
        <div className="mx-auto">
            <Header/>
            {children}
            <Footer/>
        </div>
      </body>
    </html>
  );
}
