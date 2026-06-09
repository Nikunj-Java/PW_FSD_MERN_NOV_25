// npm install cli-table3
import Table from "cli-table3";
import chalk from 'chalk';

const table= new Table({
    head:[chalk.green('Id'),'Name','Age','City']
});

table.push(
    ['1','Alice',30,'New York'],
    ['2','Bob',25,'Los Angeles'],
    ['3','Charlie',35,'Chicago']
);

console.log(table.toString());