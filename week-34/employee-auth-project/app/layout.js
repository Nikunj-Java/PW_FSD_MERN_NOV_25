export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body>

        <h2>
          Employee Management System
        </h2>

        <hr />

        {children}

      </body>
    </html>
  );
}