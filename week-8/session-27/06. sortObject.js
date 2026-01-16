let student=[
    {"name":"Nikunj Soni", marks:80},
    {"name":"Amit Saina",marks:60},
    {"name":"Rohit Kakad",marks:90},
];

//student.sort((a,b)=>a.marks-b.marks);// ascending
student.sort((a,b)=>b.marks-a.marks);// descending
console.log(student);