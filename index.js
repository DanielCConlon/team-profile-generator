const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const questions = [        
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
    }
];

// initializing the file
function init() {
    promptUser();
}

// function to start program
function promptUser() {
    console.log('>>> checking >>>')
    // prompt user to fill in information
    inquirer
        .prompt(questions)
        .then(({ name }) => {
            this.employee = new Employee(name);
        })
}

init();