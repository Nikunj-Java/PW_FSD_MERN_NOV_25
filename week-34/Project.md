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