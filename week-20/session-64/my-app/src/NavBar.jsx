
const NavBar = ({ user }) => {
  return (
    <nav>
      <h1>My App</h1>
      <p>Welcome, {user.name}!</p>
    </nav>
  );
};

export default NavBar;