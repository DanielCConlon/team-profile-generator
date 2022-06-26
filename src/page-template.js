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


}






module.exports = templateData => {

};