import Link from "next/link";

export default function RootLayout({children}){
  return(
    <html>
      <body>
        <nav>
          MyNavBar <br></br>
           <hr></hr>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
          <Link href="/gallery">Pictures</Link>
          <Link href="/products/101">Products</Link>
           <hr></hr>
        </nav>
        {children}
        <footer>
          Footer
        </footer>
      </body>
    </html>
  )
}