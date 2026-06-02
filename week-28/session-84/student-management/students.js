const students=[
    {
        id:1,
        name:"Nikunj Soni",
        course: "Node.js"
    },
    {
        id:2,
        name:"Rahul Shrivastav",
        course: "React"
    },
    {
        id:3,
        name:"Sushant Narayan",
        course: "Java"
    },
    {
        id:4,
        name:"Nikhil Prajapat",
        course: "MongoDb"
    },
    {
        id:5,
        name:"Hritik Roshan",
        course: "Javascript"
    },
    {
        id:6,
        name:"Danish Akhtar",
        course: "Angular"
    }
];

export function getStudents(){
    return students;
}

export function addStudent(id,name,course){
    students.push({
        id,
        name,
        course
    });
    return "Student Added Successfully!"
}

// const students={
//     getStudents,addStudent
// }
// export default students;