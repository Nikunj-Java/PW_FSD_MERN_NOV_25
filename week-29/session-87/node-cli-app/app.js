import readline from 'readline';

const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("What is your name? ", (name)=>{
    
    rl.question("What is your age? ", (age)=>{
    
        rl.question("What is your favorite programming language? ", (language)=>{
            console.log(`Hello ${name}, Welcome to Node JS CLI Application`);
            console.log(`You are ${age} years old.`);
            console.log(`Your favorite programming language is ${language}.`);
            rl.close();
        });
    });

    
});