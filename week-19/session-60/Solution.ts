// Step 1: Types
interface User {
  type: "user";
  name: string;
  age: number;
}

interface Admin {
  type: "admin";
  name: string;
  permissions: string[];
}

// Union Type
type Person = User | Admin;

// Step 2: Class with private + static
class UserManager {
  private users: Person[] = [];
  static appName = "User System";

  // Add user
  addUser(user: Person) {
    this.users.push(user);
  }

  // Step 3: Type Guard (Discriminated Union)
  printUser(user: Person) {
    if (user.type === "admin") {
      console.log(`Admin: ${user.name}`);
      console.log("Permissions:", user.permissions);
    } else {
      console.log(`User: ${user.name}`);
      console.log("Age:", user.age);
    }
  }

  // Print all users
  printAll() {
    this.users.forEach(user => this.printUser(user));
  }

  // Step 5: Utility Type usage
  updateUser(user: Partial<User>) {
    console.log("Updating user:", user);
  }
}

// Step 4: Generics
function getFirst<T>(arr: T[]): T {
  return arr[0];
}

// Step 7: Conditional Type
type IsAdmin<T> = T extends Admin ? true : false;

// --------------------
// 🔷 Usage
// --------------------

const manager = new UserManager();

// Add Users
manager.addUser({
  type: "user",
  name: "Nikunj",
  age: 25
});

manager.addUser({
  type: "admin",
  name: "Raj",
  permissions: ["read", "write"]
});

// Print all
manager.printAll();

// Utility Type Example
manager.updateUser({ name: "Updated Name" });

// Generics Example
console.log(getFirst<number>([1, 2, 3])); // 1
console.log(getFirst<string>(["a", "b"])); // "a"

// Static Property
console.log(UserManager.appName);

// Conditional Type Usage
const isAdmin1: IsAdmin<Admin> = true;
const isAdmin2: IsAdmin<User> = false;

console.log(isAdmin1); // true
console.log(isAdmin2); // false