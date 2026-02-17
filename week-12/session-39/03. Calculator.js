function calculator(a, b, operation) {
    try {
        
        if(typeof a!=='number'|| typeof b!=='number'){
            throw new Error("Inputs must be numbers");
        }

        switch(operation){
            case "+":
                return a+b;
            case "-":
                return a-b;
            case "*":
                return a*b;
            case "/":
                if(b===0){
                    throw new Error("Cannot divide by zero");
                }
                return a/b;
            default:
                throw new Error("Invalid operation");
        }
    } catch (error) {
        console.error("error Name:",error.name);
        console.error("error Message:",error.message);
    }
}


console.log(calculator(10, 0, "/")); // 15
console.log(calculator(10, 5, "%"));