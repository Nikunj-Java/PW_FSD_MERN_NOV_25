# Project: Employee Management System
- You need to Build an Employee Management System
    - 1.  Next.js App Router
    - 2.  MongoDB Atlas( or local)
    - 3.  Mongoose
    - 4.  Server Action
    - 5.  Email & Password Authentication
    - 6.  bcrypt.js integration
    - 7.  Auth.js(Google Authentication)
    - 8.  .env.local
    - 9.  ShadCN UI
    - 10. Protected Dashboard
## Final Application
```
Home
|
|---- Register
|
|---- Login
|
|---- Dashboard
         |
         |-- Add Employee
         |
         |-- Update Employee
         |
         |-- Delete Employee
         |
         |-- Logout

```

## Project Structure
```
app
│
├── register
│      page.jsx
│
├── login
│      page.jsx
│
├── dashboard
│      page.jsx
│
├── actions
│      authAction.js
│      employeeAction.js
│
├── api
│      auth
│         [...nextauth]
│              route.js
│
├── models
│      User.js
│      Employee.js
│
├── lib
│      db.js
│
├── components
│      LoginForm.jsx
│      RegisterForm.jsx
│      EmployeeForm.jsx
│
└── layout.js
```
## Reference Link
- 1. MongoDB & Server Action Next.js Project: [MongoDB And Server Action Reference Project](../week-33/next-mongo-demo)

- 2. Server Action: [Server Action Notes](../week-33/serverActions.md)

- 3. ShadCN & Google Auth Project: [ShadCN & Google Auth Project](google-auth-demo)

- 4. ShadCN Notes: [ShadCN Notes](GoogleAuth.md)

- 5. Google Auth Notes: [Google Auth Notes](GoogleAuth.md)

- 6. Bcrypt Notes: [Bcrypt](../week-31/session-93/Bcrypt.md)

- 7. Routing in Next.js: [Routing Project](../week-32/my-first-next-app)

- 8. Routing Notes: [Routing Notes](../week-32/nextApp.md)

