import Link from "next/link";

export const metadata={
  title:"Employee Management System",
  description:"Manage Employees using Next.js"
}
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

    </div>
  );
}