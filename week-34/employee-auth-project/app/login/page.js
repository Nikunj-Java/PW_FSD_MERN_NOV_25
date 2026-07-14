export const metadata={
  title:"Employee Login",
  description:"This page is a Login Page"
}
export default function LoginPage() {

  return (

    <div>

      <h1>Login</h1>

      <form>

        <input
          type="email"
          placeholder="Email"
        />

        <br />

        <input
          type="password"
          placeholder="Password"
        />

        <br />

        <button>
          Login
        </button>

      </form>

    </div>
  );
}