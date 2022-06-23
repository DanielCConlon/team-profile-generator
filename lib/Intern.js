const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name, school) {
        super(name);

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