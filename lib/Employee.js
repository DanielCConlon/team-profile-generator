class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // function to get the employee's name
    getName() {
        if (this.name) {
            return `${this.name}`;
        }
        return false;
    }

    // get the employee's ID
    getId() {

        if (this.name) {
            return `ID: ${this.id}`;
        }
        return false;
    }

    // get the employee's email
    getEmail() {
        if (this.name) {
            return `Email: ${this.email}`;
        }
        return false;
    }

    // get the employee's role
    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;