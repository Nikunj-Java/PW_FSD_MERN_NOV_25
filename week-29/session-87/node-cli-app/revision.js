import { Command } from "commander";
import chalk from "chalk";
import Table from "cli-table3";

const program = new Command();

const students = [];

program
.command("add")
.argument("<name>")
.argument("<city>")
.action((name, city) => {

    students.push({
        name,
        city
    });

    console.log(
        chalk.green("Student Added")
    );
});

program
.command("list")
.action(() => {

    const table = new Table({
        head: ["Name", "City"]
    });

    students.forEach(student => {

        table.push([
            student.name,
            student.city
        ]);
    });

    console.log(table.toString());
});

program.parse();

//1. add student
/// run: node student-cli.js add Nikunj Mumbai

//2. list students
/// run: node student-cli.js list