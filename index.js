const fs = require("fs");
const inquirer = require("inquirer");
const generatePage = require("./utils/generate-site");
const { writeFile, copyFile } = require("./utils/generate-site");

const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

//Questions Array
// function addStaff() {
//   inquirer
//     .prompt([
// function addMember() {
//     inquirer.prompt([
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

]//)}

  //   {
  //     type: "list",
  //     name: "addMembers",
  //     message: "Would you like to add any additional members?",
  //     choices: ["Yes", "No"],
  //     when: function (answers) {
  //         return answers.Title ==="Questions"
  //     }
  //   },
  function init() {
    inquirer.prompt(question).then((startHTML) => {
        //if (startHTML.question === "yes, start") {
            console.log();
        //}
      
      //writeToFile("./dist/index.html", generateHTML(userInput));
    });
  }
  init();

  //Loop for the questions array
  const member = [
    `Employee`,
    `Manager`,
    `Intern`,
    `Engineer`,
 ];
 
 for (let i = 0; i < member.length; i++) {
    console.log(member[i]);
 }


//Start HTML
function startHTML() {
    const html = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <title>Portfolio Demo</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css"
        />
        <!-- CSS only -->
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6"
          crossorigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="style.css" />
      </head>
      <body>
        <div class="card" style="width: 18rem">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="card-link">Card link</a>
            <a href="#" class="card-link">Another link</a>
          </div>
        </div>
        <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
          <div class="card" style="width: 18rem">
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </p>
              <a href="#" class="card-link">Card link</a>
              <a href="#" class="card-link">Another link</a>
            </div>
          </div>
      </body>
    </html>`
    
    function writeToFile(fileName, data) {
        fs.writeFile("./dist/index.html", html, (err) => {
          if (err) throw err;
          console.log("please work!");
        });
      }
        
}

// fs.appendFile("/dist/index.html", data, function (err) {
//     if (err) {
//         console.log(err);

//     }
// })