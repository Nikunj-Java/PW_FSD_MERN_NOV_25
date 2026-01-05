//Switch Case Statement
// The switch statement is used to perform different actions based on different conditions.
// It evaluates an expression and matches its value against multiple case clauses.
// When a match is found, the corresponding block of code is executed.
// The break statement is used to exit the switch statement once a case is matched.

/* 
switch (expression){
    case value1:
        // code block to be executed if expression matches value1
        break;
    case value2:
        // code block to be executed if expression matches value2
        break;
    case value3:
        // code block to be executed if expression matches value3
        break;
    default:
        // code block to be executed if none of the cases match
}*/

let day=8;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");
        break;
    case 5: 
        console.log("Friday");
        break;
    case 6: 
        console.log("Saturday");
        break;
    case 7: 
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
