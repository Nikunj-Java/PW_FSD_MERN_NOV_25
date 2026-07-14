export const metadata={
  title:"New Employee Registration",
  description:"This page is a Registration Page"
}
export default function RegisterPage() {

  return (

    <div>

      <h1>Register</h1>

      <form>

        <input
          type="text"
          placeholder="Name"
        />

        <br />

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
          Register
        </button>

      </form>

    </div>
  );
}