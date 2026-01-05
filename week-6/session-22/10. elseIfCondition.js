//elseIf Condition

// if(condition){}
// else if(anotherCondition){}
// else if(anotherCondition){}
// else if(anotherCondition){}
// else{}

let score=64;

if(score >=90){ // first condition
    console.log("Grade: A"); // executed if first condition is true
}
else if(score >=75){ // second condition
    console.log("Grade: B"); // executed if second condition is true
}
else if(score >=60){ // third condition
    console.log("Grade: C"); // executed if third condition is true
}
else{ // else block
    console.log("Grade: F"); // executed if none of the above conditions are true
}