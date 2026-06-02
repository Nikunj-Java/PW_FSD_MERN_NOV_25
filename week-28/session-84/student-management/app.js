import { getStudents,addStudent } from "./students.js";

console.log("Welcome to Students Management System!");
console.log("Available Students:")
console.log(getStudents());

console.log(addStudent(7,"Harsh Rai","Selenium"));
console.log(addStudent(8,"Tanu Maurya","Appium"));
console.log(addStudent(9,"Abhishek pal","Java"));
console.log(addStudent(10,"Vishal Yadav","MySQL"));
console.log("Students After Adding")
console.log(getStudents());