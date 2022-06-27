const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

const generateTeamMembers = members => {
    // create html for manager
    const generateManager = manager => {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${manager.getName()}</h2>
                <h3 class="card-title><i class="fa-solid fa-mug-hot"></i>${manager.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                    <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
        `;
    };

    // html for engineer
    const generateEngineer = engineer => {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${engineer.getName()}</h2>
                <h3 class="card-title><i class="fa-solid fa-glasses"></i>${engineer.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${engineer.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="${getGithub()}" target="_blank">${engineer.github}</a></li>
                </ul>
            </div>
        </div>
        `;
    };

    // html for intern
    const generateIntern = intern => {
        return `
        <div class="card employee-card">
            <div class="card-header bg-primary text-white">
                <h2 class="card-title">${intern.getName()}</h2>
                <h3 class="card-title><i class="fa-solid fa-user-graduate"></i>${intern.getRole()}</h3>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${intern.getId()}</li>
                    <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                    <li class="list-group-item">School: ${intern.school}</li>
                </ul>
            </div>
        </div>
        `;
    };

    const page = [];

    page.push(members
        .filter(employee => employee.getRole() === "Manager")
        .map(manager => generateManager(manager))
    );

    page.push(members
        .filter(employee => employee.getRole() === "Engineer")
        .map(engineer => generateEngineer(engineer))
        .join("")
    );

    page.push(members
        .filter(employee => employee.getRole() === "Intern")
        .map(intern => generateIntern(intern))
        .join("")
    );

    return page.join("");

}

module.exports = members => {

// HTML Page
return `
    <!DOCTYPE html>
    <html lang="en">

        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Team Members</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
        </head>

        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 mb-3 team-header bg-danger">
                        <h1 class="text-center text-white">Team Members</h1>
                    </div>
                </div>
            </div>

            <div class="container">
                <div class="row">
                    <div class="row col-12 d-flex justify-content-center">
                        ${generateTeamMembers(members)}
                    </div>
                </div>
            </div>
        </body>
    </html>
    `;



};