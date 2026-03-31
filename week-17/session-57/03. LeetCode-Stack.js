// s=({[]})
function isValid(s){
    let stack=[];
    let map={
        ')':'(',
        '}':'{',
        ']':'['
    }
    for(let char of s){
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        }else{
            if(stack.pop() !==map[char]) return false;
        }
    }
    return stack.length === 0;
}
let s= "({[]})";
let s1= "({[})";
console.log(isValid(s));
console.log(isValid(s1));