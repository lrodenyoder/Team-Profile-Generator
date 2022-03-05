const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

function generateHTML(answers) {
  const { name, id, email } = answers;
  console.log(name, id, email);
    let manager1 = new Manager(name, id, email);
    let employee1 = new Engineer(name, id, email);
    console.log(employee1.name)
  console.log(manager1);
  console.log(manager1.getEmail());
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    ${manager1.getRole()}
    ${employee1.getRole()}
</body>
</html>`;
}

module.exports = generateHTML;
