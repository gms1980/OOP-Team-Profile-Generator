const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require('./utils/generate-site')

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const { SIGTERM } = require("constants");

//Questions Array
// function addStaff() {
//   inquirer
//     .prompt([
    const questions = [
      {
        type: "input",
        name: "name",
        message: "Enter Staff members name?",
      },
      {
        type: "list",
        name: "Title",
        message: "What is the Employee's Title?",
        choices: ["Employee", "Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        name: "id",
        message: "Enter staff members ID?",
      },
      {
        type: "input",
        name: "email",
        message: "Enter staff members email?",
      },
      {
        type: "input",
        message: "what school does Employee attend?",
        name: "school",
        when: function (answers) {
          return answers.Title === "Intern";
        },
      },
      {
        type: "input",
        message: "what is Employee office number?",
        name: "officeNumber",
        when: function (answers) {
          return answers.Title === "Manager";
        },
      },
      {
        type: "input",
        message: "what is Engineer's Github account?",
        name: "Github Account",
        when: function (answers) {
          return answers.Title === "Engineer";
        },
      },
    ]
  
//Prompt for additional members?
//function addMembers() {
//   prompt.next([
//     {
//       type: "list",
//       name: "addMembers",
//       message: "Would you like to add any additional members?",
//       choices: ["Yes", "No"],
//     },
//   ]);


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log("please work!");
    });
}


//Function to initiate the app
function initApp() {
  inquirer.prompt(questions).then(function(userInput){
      console.log(userInput);
      writeToFile("index.html", generateHTML(userInput));
  })
  //startHTML
}

initApp();
