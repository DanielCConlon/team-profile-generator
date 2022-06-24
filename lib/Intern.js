const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, id, email, school,) {
        // call parent constructor here
        super(name, id, email);

        this.school = school;

    }

    // get the interns school
    getSchool() {
        return `School: ${this.school}`;
    }

    // override main getrole to return intern
    getRole() {
        return 'Intern';
    }

}

module.exports = Intern;