// npm install commander
import {Command} from 'commander';
const program= new Command();
program
    .name('server')

    .description('A simple server application')
    .version('1.0.0')
    .option('-p, --port <number>', 'Port number', '3000')
    .argument('<name>')
    .action((name)=>{
        console.log(`Hello ${name}, Welcome to Node JS CLI Application`);
        console.log(`Server is running on port ${program.opts().port}`);
    })

program.parse();

// run: node server.js --help
// run: node server.js John --port 4000
// run: node server.js --port 4000 John
// run node server.js Nikunj