const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

let teamMembers = [];

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your Manager's name? "
    },

    {
        type: 'input',
        name: 'id',
        message: "What is your Manager's ID? "
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your Manager's email? "
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your Manager's office number? "
    }

];

const engineerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "What is your Engineer's name? "
    },

    {
        type: 'input',
        name: 'id',
        message: "What is your Engineer's ID? "
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your Engineer's email? "
    },

    {
        type: 'input',
        name: 'github',
        message: "What is your Engineer's github? "
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your Intern's name? "
    },

    {
        type: 'input',
        name: 'id',
        message: "What is your Intern's ID? "
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your Intern's email? "
    },

    {
        type: 'input',
        name: 'school',
        message: "What is your Intern's School? "
    }
];

// initializing the file
function initApp() {
    let teamMember;
    promptUser();
}

// function to start program
function promptUser() {
    // prompt user to fill in information
    inquirer
        .prompt(managerQuestions)
        // prompt the user which role the employee is to then have the corresponding questions asked
        .then(({ name, id, email, officeNumber }) => {
            this.teamMember = new Manager(name, id, email, officeNumber);
            teamMembers.push(this.teamMember);
            console.log(teamMember);
            // prompt the user if they want to add a team member if yes go to next prompt, else no
            inquirer
            .prompt({
                type: 'confirm',
                name: 'addTeamMember',
                message: 'Do you want to add team members? '
            })
            .then(({ addTeamMember }) => {
                if (addTeamMember) {
                    inquirer
                    .prompt({
                        type: 'list',
                        name: 'addMemberRole',
                        message: 'What role is your team member? ',
                        choices: ['Engineer', 'Intern']
                    })
                    .then((addMemberResponse) => {
                        if(addMemberResponse.addMemberRole === 'Engineer') {
                            inquirer
                            .prompt(engineerQuestions)
                            .then(({ name, id, email, github }) => {
                                this.teamMember = new Engineer(name, id, email, github);
                                teamMembers.push(this.teamMember);
                                console.log(teamMembers);
                            })
                        }
                        else if (addMemberResponse.addMemberRole === 'Intern') {
                            inquirer
                            .prompt(internQuestions)
                            .then(({ name, id, email, school }) => {
                                this.teamMember = new Intern(name, id, email, school);
                                teamMembers.push(this.teamMember);
                                console.log(teamMembers);
                            })
                        }
                    })

                }
                console.log('ending because no teammate added');
            }) 
        })
}

initApp();