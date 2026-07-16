import { Inter, Roboto } from "next/font/google";
 

 
const inter = Inter({
  subsets: ["latin"],
})

const roboto = Roboto({
  subsets: ["latin"],
  weight: [
    "100",
    "300",
    "400",
    "500",
    "700",
    "900",
  ],
})
export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className}>

        <h2>
          Employee Management System
        </h2>

        <hr />
        <p className={roboto.className}>
          Welcome
        </p>

        {children}

      </body>
    </html>
  );
}