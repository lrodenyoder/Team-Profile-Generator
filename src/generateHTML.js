const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

const generateManager = (managerData) => {
  return `<div class="card">
            <h1 class="card-header">
                ${managerData.getName()} <br>
                <i class="bi bi-briefcase"></i> ${managerData.getRole()}
            </h1>
            <div class="card-body">
                <p class="card-text">ID: ${managerData.getId()}</p>
                <p class="card-text">Email: <a href = "mailto: ${managerData.getEmail()}">${managerData.getEmail()}</a></p>
                <p class="card-text">Office Number: ${
                  managerData.officeNumber
                }</p>
            </div>
        </div>`;
};

const generateEmployees = (employeeData) => {
  //uses .filter() to separate engineer and intern employees and .map() to generate cards for each employee
  return `
    ${employeeData
      .filter(({ github }) => github)
      .map(({ employeeType, name, id, email, github }) => {
        return `<div class="card">
            <h1 class="card-header">
                ${name}<br>
                <i class="bi bi-display"></i> ${employeeType}
            </h1>
            <div class="card-body">
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: <a href = "mailto: ${email}">${email}<a></p>
                <p class="card-text">GitHub: <a href = "https://github.com/${github}" target = "_blank">${github}</a></p>
            </div>
        </div>
    `;
      })}

    ${employeeData
      .filter(({ school }) => school)
      .map(({ employeeType, name, id, email, school }) => {
        return `<div class="card">
            <h1 class="card-header">
                ${name}<br>
                <i class="bi bi-mortarboard"></i> ${employeeType}
            </h1>
            <div class="card-body">
                <p class="card-text">ID: ${id}</p>
                <p class="card-text">Email: <a href = "mailto: ${email}">${email}</a></p>
                <p class="card-text">School: ${school}</p>
            </div>
        </div>
    `;
      })}

`;
};

function generateHTML(answers) {
  const { name, id, email, officeNumber, ...employeesObject } = answers;
  let manager = new Manager(name, id, email, officeNumber);
  //extracts employee array from answers object
  let employeeArray = employeesObject.employees;

  return `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>

<body>
    <header class="jumbotron">
        <h1 class="display-6 text-center">My Team</h1>
    </header>

        <main class="card-deck">
            ${generateManager(manager)}
            ${generateEmployees(employeeArray)}
        </main>

</body>

</html>`;
};

module.exports = generateHTML;