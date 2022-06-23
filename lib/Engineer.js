const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name, github) {
        super(name);

        this.github = github;
    }

    // get the engineers github 
    getGithub() {
        return `Github: https://github.com/${this.github}`;
    }

    // override main getrole to return engineer
    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;