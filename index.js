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

        return answers.selection == "Yes" ? init() : writeFile(teamMembers);
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

        return answers.selection == "Yes" ? init() : writeFile(teamMembers);
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

        return answers.selection == "Yes" ? init() : writeFile(teamMembers);
    }
    if (answers.selection == "Yes") {
      init();
    } else {
      console.log(teamMembers);
      writeFile(teamMembers);
    }
  });
}

init();

const buildHtml = (data) => {
  console.log(data);

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
  </head>
  <body>
      <header>
          <nav class="navbar" id="navbar">
              <span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">Team Profile</span>
          </nav>
      </header>
      <main>
          <div class="container">
              <div class="row justify-content-center" id="team-cards">
              </div>
          </div>
          <div class="col-4 mt-4">
          <div class="card h-100">
              <div class="card-header">
                  <h3>${Engineer.name}</h3>
                  <h4>Engineer</h4><i class="material-icons">glasses</i>
              </div>
              <div class="card-body">
                  <p class="id">ID: ${Engineer.id}</p>
                  <p class="email">Email: <a href="mailto:${Engineer.email}">${Engineer.email}</a></p>
                  <p class="github">Github: <a href="https://github.com/${Engineer.github}">${Engineer.github}</a></p>
              </div>
          </div>
          </div>
      <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              
              <h4>Intern</h4><i class="material-icons">assignment_ind</i>
          </div>
          <div class="card-body">
              <p class="name">Name: ${Intern.name}</p>
              <p class="id">ID: ${Intern.id}</p>
              <p class="email">Email:<a href="mailto:${Intern.email}">${Intern.email}</a></p>
              <p class="school">School: ${Intern.school}</p>
          </div>
      </div>
      </div>
      <div class="col-4 mt-4">
      <div class="card h-100">
          <div class="card-header">
              <h3>${Manager.name}</h3>
              <h4>Manager</h4><i class="material-icons">content_paste</i>
          </div>
          <div class="card-body">
              <p class="id">ID: ${Manager.id}</p>
              <p class="email">Email: <a href="mailto:${Manager.email}">${Manager.email}</a></p>
              <p class="office">Office Number: ${Manager.officeNumber}</p>
          </div>
      </div>
  </div>
      </main>
  </body>
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
  </html>
  `;
};

const writeFile = (data) => {
  console.log(data);
  fs.writeFile("./dist/index.html", buildHtml(data), (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("This worked and your profile has been accepted. ");
    }
  });
};

