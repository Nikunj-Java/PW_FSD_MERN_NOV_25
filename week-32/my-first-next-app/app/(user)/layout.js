import Link from "next/link";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
          backgroundColor: "#f4f6f9",
        }}
      >
        {/* Navbar */}
        <nav
          style={{
            background: "linear-gradient(90deg, #0f172a, #1e3a8a)",
            color: "white",
            padding: "15px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            boxShadow: "0 3px 10px rgba(0,0,0,0.3)",
          }}
        >
          {/* Logo */}
          <h2 style={{ margin: 0 }}>🚀 Next.js Demo</h2>

          {/* Navigation Links */}
          <div style={{ display: "flex", gap: "15px" }}>
            

            <Link href="/login" style={linkStyle}>
              Login
            </Link>

            <Link href="/dashboard" style={linkStyle}>
              Dashboard
            </Link>

             
          </div>
        </nav>

        {/* Main Content */}
        <main
          style={{
            minHeight: "80vh",
            padding: "40px",
            maxWidth: "1000px",
            margin: "30px auto",
            backgroundColor: "white",
            borderRadius: "10px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          {children}
        </main>

        {/* Footer */}
        <footer
          style={{
            backgroundColor: "#0f172a",
            color: "white",
            textAlign: "center",
            padding: "20px",
            marginTop: "20px",
          }}
        >
          <h3 style={{ margin: 0 }}>Next.js Learning Project</h3>

          <p style={{ marginTop: "8px" }}>
            © 2026 All Rights Reserved | Developed with ❤️ using Next.js
          </p>
        </footer>
      </body>
    </html>
  );
}

const linkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "10px 16px",
  borderRadius: "6px",
  backgroundColor: "#2563eb",
  fontWeight: "bold",
  transition: "0.3s",
};