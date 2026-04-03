interface Student{
    name: string,
    marks: number
}

let s1: Student={
    name: "Nikunj Soni",
    marks: 80
}
function getResult(student: Student){
    if(student.marks>40) return student.name + " Passed!"
    else return student.name + " Failed!"
}

console.log(getResult(s1));