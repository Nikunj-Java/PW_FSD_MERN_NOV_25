const Settings = ({ user,setUser}) => {
  return (
    <div>
      <h2>Settings</h2>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <button onClick={()=>setUser({name:"John Doe",email:"john@pw.live"})}>
        Update User
      </button>
    </div>
  );
};

export default Settings;