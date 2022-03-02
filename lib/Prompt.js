const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

class Prompt {
  constructor() {
    this.manager = [];
    this.employees = [];
  }

  promptManager() {
    console.log(`

    Generate a Team Profile

    `);

    return inquirer.prompt([
      {
        type: "input",
        name: "managerName",
        message: "What is the team manager's name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter a name!");
            return false;
          }
        },
      },
    ]);
  }

  promptEmployee(employeeData) {
    console.log(`
        Add a New Employee
    `);

    return inquirer.prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Please select and employee type to add",
        choices: ["Engineer", "Intern"],
      },
    ]);
    };

    writeToFile(data) {
        return new Promise((resolve, reject) => {
          fs.writeFile(".dist/index.html", data, (err) => {
            if (err) {
              reject(err);
              return;
            }

            resolve({
              ok: true,
              message: "File Created!",
            });
          });
        });
    }
};

module.exports = Prompt;
