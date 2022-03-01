const Employee = require('../lib/Employee.js');

class Engineer extends Employee {
    constructor(name = "", id = "", email = "", officeNumber = "", github = "",) {
        super(name, id, email, officeNumber);

        this.github = github;
        this.role = "Engineer";
    };

    getGithub() {
        return this.github;
    }
};

module.exports = Engineer;