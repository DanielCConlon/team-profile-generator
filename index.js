const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

let teamMembers = [];


const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your Manager's name? ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log("Name is required!");
                return false;
            }
        }

    },

    {
        type: 'input',
        name: 'id',
        message: "What is your Manager's ID? ",
        validate: idInput => {
            if (idInput) {
                return true;
            }
            else {
                console.log("ID is required!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your Manager's email? ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log("Email is required!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'officeNumber',
        message: "What is your Manager's office number? ",
        validate: officeNumberInput => {
            if (officeNumberInput) {
                return true;
            }
            else {
                console.log("Office Number is required!");
                return false;
            }
        }
    }

];

const engineerQuestions = [

    {
        type: 'input',
        name: 'name',
        message: "What is your Engineer's name? ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log("Name is required!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "What is your Engineer's ID? ",
        validate: idInput => {
            if (idInput) {
                return true;
            }
            else {
                console.log("ID is required!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your Engineer's email? ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log("Email is required!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'github',
        message: "What is your Engineer's github? ",
        validate: githubInput => {
            if (githubInput) {
                return true;
            }
            else {
                console.log("Github is required!");
                return false;
            }
        }
    }
];

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: "What is your Intern's name? ",
        validate: nameInput => {
            if (nameInput) {
                return true;
            }
            else {
                console.log("Name is required!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'id',
        message: "What is your Intern's ID? ",
        validate: idInput => {
            if (idInput) {
                return true;
            }
            else {
                console.log("ID is required!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'email',
        message: "What is your Intern's email? ",
        validate: emailInput => {
            if (emailInput) {
                return true;
            }
            else {
                console.log("Email is required!");
                return false;
            }
        }
    },

    {
        type: 'input',
        name: 'school',
        message: "What is your Intern's School? ",
        validate: schoolInput => {
            if (schoolInput) {
                return true;
            }
            else {
                console.log("The School is required!");
                return false;
            }
        }
    }
];

// initializing the file
function getEmployeeInfo() {
    let teamMember;
}

// prompt for the next team member
getEmployeeInfo.prototype.nextMember = function() {
    inquirer
    .prompt({
        type: 'confirm',
        name: 'addTeamMember',
        message: 'Do you want to add team members? '
    })
    // if they choose to add a team member they canadd an engineer or an intern to the team
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
                    this.getEngineer();
                }
                else if(addMemberResponse.addMemberRole === 'Intern') {
                    this.getIntern();
                }
                else {
                    writeFile(teamMembers);
                }

            });

        }
        console.log('No Team members were added.');
        writeFile(teamMembers);
    })
};

getEmployeeInfo.prototype.getManager = function() {
    inquirer
    .prompt(managerQuestions)
    .then(({ name, id, email, officeNumber }) => {
        this.teamMember = new Manager(name, id, email, officeNumber);
        teamMembers.push(this.teamMember);
        this.nextMember();
    })
};

getEmployeeInfo.prototype.getEngineer = function() {
    inquirer
    .prompt(engineerQuestions)
    .then(({ name, id, email, github }) => {
        this.teamMember = new Engineer(name, id, email, github);
        teamMembers.push(this.teamMember);
        this.nextMember();
    })
};


getEmployeeInfo.prototype.getIntern = function () {
    inquirer
    .prompt(internQuestions)
    .then(({ name, id, email, school }) => {
        this.teamMember = new Intern(name, id, email, school);
        teamMembers.push(this.teamMember);
        this.nextMember();
    })
};


function writeFile() {
    const pageHTML = generatePage(teamMembers);

    fs.writeFile('./dist/index.html', pageHTML, err => {
        if (err) {
            console.log('Error: ' + err);
        }
        console.log('File created!');
    });

    fs.copyFile('./src/style.css', './dist/style.css', err => {
        if (err) {
            console.log('Error: ' + err);
            return;
        }
        console.log('Stylesheet copied!');
    })
}

new getEmployeeInfo().getManager();