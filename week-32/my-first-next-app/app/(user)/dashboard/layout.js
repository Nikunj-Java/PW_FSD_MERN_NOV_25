import { redirect } from "next/navigation";

export default function DashboardLayout({
  children,
  users,
  analytics,
}) {

  const loggedIn = true;

  if (!loggedIn) {
    redirect("/login");
  }

  return (
    <div>
      <h1>Dashboard Layout</h1>

      <hr />

      {children}

      <hr />

      {users}

      <hr />

      {analytics}
    </div>
  );
}