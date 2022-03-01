//VARIABLES
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
const Employee = require("./lib/Employee.js");
const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

//FUNCTIONS
const promptManager = () => {

    console.log(`

    Generate a Team Profile

    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the team manager's name?",
            validate: (nameInput) => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter a name!");
                    return false;
                }
            }
        },
        
    ]);
};

const promptEmployee = employeeData => {
    console.log(`
        Add a New Employee
    `)

    return inquirer.prompt([
      {
        type: "list",
        name: "employeeType",
        message: "Please select and employee type to add",
        choices: ["Engineer", "Intern"],
      },
    ]);
};

//creates HTML file from user input data
const writeToFile = (data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('.dist/index.html', data, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

//call to initialize app
promptManager()
    .then(promptEmployee)
    .then((data) => {
        console.log(data);
        return generateHTML(data);
    })
    // .then((htmlData) => {
    //     return writeToFile(htmlData);
    // })
    // .then((writeFileResponse) => {
    //     console.log(writeFileResponse);
    // })
    .catch((err) => {
        console.error(err);
    });