const fs = require('fs');
const inquirer = require('inquirer');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Employees Name?'
        }
    ])

    .then(answers => {
        console.log(answers);
    })
    