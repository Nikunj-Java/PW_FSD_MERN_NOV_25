type Admin = {
  type: "admin";
  permissions: string[];
};

type MyUser = {
  type: "user";
  name: string;
};

type Person = Admin | MyUser;

function handlePerson(p: Person) {
  if (p.type === "admin") {
    console.log(p.permissions);
  } else {
    console.log(p.name);
  }
}
handlePerson({ type: "admin", permissions: ["read", "write"] }); // Output: [ 'read', 'write' ]
handlePerson({ type: "user", name: "Alice" }); // Output: Alice