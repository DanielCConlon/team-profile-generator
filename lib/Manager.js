const Employee = require('../lib/Employee');

class Manager extends Employee {
    constructor(name = '') {
        // call parent constructor here
        super(name);

        this.officeNumber = officeNumber;
    }

    // override main getrole to return manager
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;