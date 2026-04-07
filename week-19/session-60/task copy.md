# 🚀 TypeScript + Advanced TypeScript Task

## 🧠 Project: User Management System

This task will help you practice:
- Classes & Access Modifiers
- Union & Intersection Types
- Type Guards & Narrowing
- Generics
- Utility Types (Partial, Pick, Omit)
- Static Properties
- Conditional Types

---

# 📌 Step 1: Define Types

Create two interfaces:

```ts
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
```

Create a union type:

```ts
type Person = User | Admin;
```

---

# 📌 Step 2: Create Class

Create a class `UserManager`

### Requirements:
- Store users in a **private array**
- Add method to insert users

```ts
class UserManager {
  private users: Person[] = [];

  addUser(user: Person) {
    this.users.push(user);
  }
}
```

---

# 📌 Step 3: Type Guard (Important)

Create a method:

```ts
printUser(user: Person)
```

### Behavior:
- If user → print name & age
- If admin → print name & permissions

👉 Use `if (user.type === "admin")`

---

# 📌 Step 4: Generics

Create a reusable function:

```ts
function getFirst<T>(arr: T[]): T
```

### Example:
```ts
getFirst([1, 2, 3]); // 1
getFirst(["a", "b"]); // "a"
```

---

# 📌 Step 5: Utility Types

### 1. Partial

```ts
type UpdateUser = Partial<User>;
```

Create function:
```ts
updateUser(user: UpdateUser)
```

---

### 2. Pick

```ts
type UserNameOnly = Pick<User, "name">;
```

---

### 3. Omit

```ts
type UserWithoutAge = Omit<User, "age">;
```

---

# 📌 Step 6: Static Property

Add static property:

```ts
static appName = "User System";
```

Access it using:

```ts
UserManager.appName;
```

---

# 📌 Step 7: Conditional Type (Advanced)

```ts
type IsAdmin<T> = T extends Admin ? true : false;
```

---

# 📌 Step 8: Final Usage

```ts
const manager = new UserManager();

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
```

---

# 🎯 Expected Learning

- Understand union & type guards
- Work with classes and private properties
- Use generics for reusable logic
- Apply utility types
- Learn conditional types

---

# 🔥 Bonus Challenge

- Add method: `removeUser(name: string)`
- Add method: `getAllUsers()`
- Make some properties `readonly`
- Add validation before adding user

---

# 🚀 Submission

- Complete all steps
- Test your code using `npx tsx file.ts`
- Share your solution for review
