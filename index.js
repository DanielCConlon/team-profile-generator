const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamMembers = [];

const employeeQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your team member's name? "
    },

    {
        type: 'input',
        name: 'id',
        message: "What is your team member's ID? "
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your team member's email? "
    },

    {
        type: 'list',
        name: 'role',
        message: "What is your team member's role? ",
        choices: ['Manager', 'Engineer', 'Intern']
    }
];

// initializing the file
function initApp() {
    promptUser();
}

// function to start program
function promptUser() {
    // prompt user to fill in information
    inquirer
        .prompt(employeeQuestions)
        // prompt the user which role the employee is to then have the corresponding questions asked
        .then(({ name }) => {
            this.employee = new Employee(name);
        })
}

initApp();