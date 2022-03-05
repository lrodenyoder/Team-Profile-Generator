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

    return inquirer
      .prompt([
        {
          type: "input",
          name: "name",
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
        {
          type: "input",
          name: "id",
          message: "What is the employee's ID number?",
          validate: (idInput) => {
            let ID = parseInt(idInput);
            if (Number.isInteger(ID)) {
              return true;
            } else {
              console.log("Please enter a valid ID");
              return false;
              //TO DO: doesn't clear input
            }
          },
        },
        {
          type: "input",
          name: "email",
          message: "What is the team manager's email?",
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log("Please enter a email!");
              return false;
            }
          },
        },
      ])
    //   .then((data) => {
    //     const { managerName, id, managerEmail } = data;
    //     let manager = new Manager(managerName, id, managerEmail);
    //     console.log(manager);
    //   });
  };

  promptEmployee(teamData) {
    if (!teamData.employees) {
      teamData.employees = [];
    };

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
    ])
      .then((employeeData) => {
        teamData.employees.push(employeeData);
        return employeeData;
      });
  }

//   writeToFile(data) {
//     return new Promise((resolve, reject) => {
//       fs.writeFile(".dist/index.html", data, (err) => {
//         if (err) {
//           reject(err);
//           return;
//         }

//         resolve({
//           ok: true,
//           message: "File Created!",
//         });
//       });
//     });
//   }
}

module.exports = Prompt;
