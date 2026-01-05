// Logical Operators
// Logical operators are used to combine multiple conditions or boolean values.
// They return a boolean value (true or false) based on the logical operation.
// operators: &&    =========> AND operator
// operators:||     =========> OR operator
// operators: !     =========> NOT operator

let isAdult= true;
let hasVoterID= false;

// AND operator (&&) ==> both conditions must be true
if(isAdult && hasVoterID){
    console.log("User is eligible to vote."); //true
}else{
    console.log("User is not eligible to vote.");   
}

// OR operator (||)  ==> at least one condition must be true
if(isAdult || hasVoterID){
    console.log("User can access certain privileges.");//true
}else{
    console.log("User cannot access certain privileges.");
}

// NOT operator (!)  ==> negates the boolean value
if(!hasVoterID){
    console.log("User needs to obtain a Voter ID."); //true
}else{
    console.log("User has a Voter ID.");
}