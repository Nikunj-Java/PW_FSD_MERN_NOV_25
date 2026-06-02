function add(a,b){
    return a + b;
}

function sub(a,b){
    return a - b;
}
function multiply(a,b){
    return a * b;
}

function divide(a,b){
    if(b==0){
        return "na"
    } 
    return a / b;
}

const calculator={
    add,sub,multiply,divide
};

export default calculator;