#! usr/bin/env node
import inquirer from "inquirer";
console.log("Wellcome to CodewithNaima - CLI Number Gussing Game");
// const randomNumber = Math.floor(Math.random() * 5 + 1);
// for (let i = 0; i < 3; i++) {
  // let i = 0
  // while(i < 5) {
  // const answer = await inquirer.prompt([
  //     {
  //         name: "UserGussedNumber",
  //         type: "number",
  //         message: "Enter your guess number(Number Limit from 1 to 5)",
  //     }
  // ]);
  // if (answer.UserGussedNumber === randomNumber) {
  //     console.log("Congratulations ! you guess a correct number.");
  //     i = 5
  // }
  // else {
  //     console.log("Sorry, you guess a wrong number");
  // }
  // i++
  // }
  // console.log(`Actual number: ${randomNumber}`)
// }

let myTasks: any[] = []
let isRunning: boolean = true
while(isRunning) {
const answers = await inquirer.prompt([
  {
    name: "option",
    type: "list",
    message: "Select your option",
    choices: ["Add new task",
      "View Tasks",
      "Exit"]}])
switch(answers.option) {
  case "Add new task":
    const newTask = await inquirer.prompt([
      {
        name: "task",
        type: "input",
        message: "Enter your task"
      }
    ])
    myTasks.push(newTask.task)
    console.log('Added new task:', newTask.task);
    break;
  case "View Tasks":
    console.table(myTasks);
    break;
  case "Exit":
    console.log("Exit");
    isRunning = false;
    break;
  default:
    console.log("Invalid option");
    break;}
}