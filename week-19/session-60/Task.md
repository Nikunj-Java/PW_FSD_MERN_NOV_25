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