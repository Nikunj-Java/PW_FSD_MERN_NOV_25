# Database Normalization Task

## Objective
Convert the given unnormalized table into:

- 1NF (First Normal Form)
- 2NF (Second Normal Form)
- 3NF (Third Normal Form)

---

# Scenario

A company stores employee and project details in a single table.

---

# Given Data (UNF)

| EmpID | EmpName | Department | ProjectNames | Manager | ManagerPhone |
|-------|----------|-------------|---------------|----------|---------------|
| E101 | Rahul | IT | Website, Mobile App | Amit | 98765 |
| E102 | Priya | HR | Recruitment System | Neha | 87654 |
| E103 | Karan | IT | Website, CRM | Amit | 98765 |

---

# Task 1: Convert into 1NF

## Rules of 1NF
- Each column should contain atomic values
- No multiple values in a single column
- No repeating groups

## Instructions
- Split multiple project names into separate rows
- Create a proper table structure

### Expected Output Example

| EmpID | EmpName | Department | ProjectName | Manager | ManagerPhone |
|-------|----------|-------------|--------------|----------|---------------|

---

# Task 2: Convert into 2NF

## Assume Composite Primary Key

(EmpID, ProjectName)

## Rules of 2NF
- Table must already be in 1NF
- Remove partial dependencies

## Instructions
Identify attributes that depend only on:
- EmpID
- ProjectName

Create separate tables such as:
- Employee
- Project
- Employee_Project

---

# Task 3: Convert into 3NF

## Rules of 3NF
- Table must already be in 2NF
- Remove transitive dependencies

## Hint
ManagerPhone depends on Manager, not directly on ProjectName.

## Instructions
Create a separate Manager table.

---

# Expected Final Tables

## Employee Table

| EmpID | EmpName | Department |
|-------|----------|-------------|

---

## Project Table

| ProjectID | ProjectName | ManagerID |
|-----------|--------------|------------|

---

## Manager Table

| ManagerID | ManagerName | ManagerPhone |
|-----------|---------------|---------------|

---

## Employee_Project Table

| EmpID | ProjectID |
|-------|------------|

---------------------------------------------------------------------------