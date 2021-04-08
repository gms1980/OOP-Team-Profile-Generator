const fs = require("fs");
const inquirer = require("inquirer");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");


function addStaff() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "Enter Staff members name?",
      },
      {
        type: "list",
        name: "role",
        message: "Select the role of the staff member?",
        choices: ["Employee", "Engineer", "Intern", "Manager"],
      },
      {
        type: "input",
        name: "id",
        message: "Enter staff members ID?",
      },
    ])

    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub username";
      } else if (role === "Manager") {
        roleInfo = "office phone number";
      } else if (role === "Intern") {
        roleInfo = "School Name";
      }
    });
}
    // inquirer.prompt ([
    //     {
    //         type: "input",
    //         name: "roleInfo",
    //         message: `Enter staff member's ${roleInfo}`,
    //     }
    // ])

  // .then((answers) => {
  //   console.log(answers);
  // })
//}

function initApp() {
  addStaff();
  //startHTML
}

initApp();
