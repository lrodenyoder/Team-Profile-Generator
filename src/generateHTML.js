const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

function generateManager(managerData) {
  console.log(managerData);
  return `<div class="card">
            <h1 class="card-header">
                ${managerData.getName()} <br>
                <i class="bi bi-briefcase"></i> ${managerData.getRole()}
            </h1>
            <div class="card-body">
                <p class="card-text">ID: ${managerData.getId()}</p>
                <p class="card-text">EMAIL: ${managerData.getEmail()}</p>
                <p class="card-text">OFFICE#: ${managerData.officeNumber}</p>
            </div>
        </div>`;
}

function generateHTML(answers) {
  console.log(answers);
  const { name, id, email, officeNumber, ...employees } = answers;
  //console.log(name, id, email);
  let manager = new Manager(name, id, email, officeNumber);
  let employee1 = new Engineer(name, id, email);
  //console.log(employee1.name)
  //console.log(manager1);
  //console.log(manager1.getEmail());
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
        
        <div class="card">
            <h1 class="card-header">
                NAME<br>
                <i class="bi bi-display"></i> ENGINEER
            </h1>
            <div class="card-body">
                <p class="card-text">ID:</p>
                <p class="card-text">EMAIL:</p>
                <p class="card-text">OFFICE#:</p>
            </div>
        </div>
        <div class="card">
            <h1 class="card-header">
                NAME<br>
                <i class="bi bi-mortarboard"></i> INTERN
            </h1>
            <div class="card-body">
                <p class="card-text">ID:</p>
                <p class="card-text">EMAIL:</p>
                <p class="card-text">OFFICE#:</p>
            </div>
        </div>
    </main>

</body>

</html>`;
}

module.exports = generateHTML;
