const Employee = require('../lib/Employee.js');

class Manager extends Employee {
    constructor(name = "", id = "", email = "", officeNumber = "") {
        super(name, id, email);

        this.officeNumber = parseInt(officeNumber);
        this.role = "Manager";
    };
};

module.exports = Manager;