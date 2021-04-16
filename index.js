const fs = require("fs");
const inquirer = require("inquirer");
const generateSite = require("./utils/generateSite");
//const writeFile = require("./utils/generateSite");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const teamMembers = [];

const question = [
  {
    type: "input",
    name: "name",
    message: "Enter Staff members name?",
  },
  {
    type: "list",
    name: "Title",
    message: "What is the Employee's Title?",
    choices: ["Engineer", "Intern", "Manager"],
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
    message: "what school does member attend?",
    name: "school",
    when: function (answers) {
      return answers.Title === "Intern";
    },
  },
  {
    type: "input",
    message: "what is Managers office number?",
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
  {
    type: "list",
    name: "selection",
    message: "Add another employee?",
    choices: ["Yes", "No"],
  },
];

function init() {
  inquirer.prompt(question).then((answers) => {
    teamMembers.push(answers);
    switch (answers.Title) {
      case "Manager":
        teamMembers.push(
          new Manager(
            answers.name,
            answers.id,
            answers.email,
            answers.Title,
            answers.officeNumber
          )
        );
        return answers.selection == "Yes" ? init() : console.log(teamMembers);
      case "Intern":
        teamMembers.push(
          new Intern(
            answers.name,
            answers.id,
            answers.email,
            answers.Title,
            answers.school
          )
        );
        return answers.selection == "Yes" ? init() : console.log(teamMembers);
      case "Engineer":
        teamMembers.push(
          new Engineer(
            answers.name,
            answers.id,
            answers.email,
            answers.Title,
            answers.github
          )
        );
        return answers.selection == "Yes" ? init() : console.log(teamMembers);
      // default:
      //     return console.log("No valid options selected")
    }
    if (answers.selection == "Yes") {
      init();
    } else {
      console.log(teamMembers);
    }
  });
}

init();

// async function renderHTML(file) {
//   const htmlProfilePage = render(file);

//   await writeFileAsync(outputPath, htmlProfilePage).then(function () {
//     console.log("Hope this works");
//   });
// }

const writeFile = data => {
  fs.writeFile("./dist/index.html", data, err => {
    if (err) {
      console.log(err);
      return;
    } else
    {console.log("this worked and your profile has been accepted. ")
  }
  })
};
// addManager()
//   .then(addEmployee)
//   .then(teamArray => {
//     return generateSite(teamArray);
//   })
//   .then(pageHTML => {
//     return writeFile(pageHTML);
//   })
//   .catch(err => {
//  console.log(err);
//   });