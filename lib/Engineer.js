const Employee = require('../lib/Employee');

class Engineer extends Employee {
    constructor(name = '') {
        super(name);

        this.github = github;

    }

    // get the engineers github 
    getGithub() {

    }

    // override main getrole to return engineer
    getRole() {
        return {
            role: 'Engineer'
        };
    }

}

module.exports = Engineer;