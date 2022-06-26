const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, id, email, github,) {
        super(name, id, email);

        this.github = github;
    }

    // get the engineers github 
    getGithub() {
        return `https://github.com/${this.github}`;
    }

    // override main getrole to return engineer
    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;