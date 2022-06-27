const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generatePage = require('./src/page-template');

const mockDataManager = {
        name: 'Bob',
        id: '1',
        email: 'test@test.com',
        officeNumber: '100'
}

const mockDataIntern = {
    name: 'Tom',
    id: '20',
    email: 'test@testschool.com',
    school: 'Chapel Hill'
}

const mockDataEngineer = {
    name: 'Jon',
    id: '5',
    email: 'test@test2.com',
    github: 'test'
}


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
function getEmployeeInfo() {
    let teamMember;
}

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
                    console.log(teamMembers);
                    writeFile(teamMembers);
                }

            });

        }
        console.log('ending because no teammate added');
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

getEmployeeInfo.prototype.getEngineer = function () {
    inquirer
    .prompt(engineerQuestions)
    .then(({ name, id, email, github }) => {
        this.teamMember = new Intern(name, id, email, github);
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