class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // function to get the employee's name
    getName() {
        return `${this.name}`;
    }

    // get the employee's ID
    getId() {
        return `ID: ${this.id}`;
    }

    // get the employee's email
    getEmail() {
        return `Email: ${this.email}`;
    }

    // get the employee's role
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;