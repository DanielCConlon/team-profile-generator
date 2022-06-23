const Employee = require('../lib/Employee');

class Intern extends Employee {
    constructor(name = '') {
        super(name);

        this.school = school;
    }

    // get the interns school
    getSchool() {

    }

    // override main getrole to return intern
    getRole() {
        return {
            role: 'Intern'
        };
    }

}

module.exports = Intern;