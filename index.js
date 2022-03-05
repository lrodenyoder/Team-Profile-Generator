//VARIABLES
const Prompt = require('./lib/Prompt');
//const Manager = require('./lib/Manager');
const fs = require("fs");
const generateHTML = require('./src/generateHTML.js');

const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("dist/index.html", data, (err) => {
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
};

//call to initialize app
new Prompt().promptManager()
  //.then(new Prompt().promptEmployee)
    .then((answers) => {
        //console.log(answers, typeof answers);
        // const { name, id, email } = answers;
        // console.log(name, id, email);
        // let manager1 = new Manager(name, id, email);
        // console.log(manager1)
        return generateHTML(answers)
    })
    .then((htmlData) => {
        console.log(htmlData)
       return writeToFile(htmlData);
    });




//call to initialize app
// promptManager()
//     .then(promptEmployee)
//     .then((data) => {
//         console.log(data);
//         return generateHTML(data);
//     })
//     // .then((htmlData) => {
//     //     return writeToFile(htmlData);
//     // })
//     // .then((writeFileResponse) => {
//     //     console.log(writeFileResponse);
//     // })
//     .catch((err) => {
//         console.error(err);
//     });