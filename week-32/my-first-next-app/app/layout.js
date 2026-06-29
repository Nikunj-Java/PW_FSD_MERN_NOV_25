export default function RootLayout({children}){
  return(
    <html>
      <body>
        <nav>
          MyNavBar
        </nav>
        {children}
        <footer>
          Footer
        </footer>
      </body>
    </html>
  )
}