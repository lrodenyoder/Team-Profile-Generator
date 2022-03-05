//VARIABLES
const Prompt = require('./lib/Prompt');
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

const copyFile = () => {
  return new Promise((resolve, reject) => {
    fs.copyFile("./src/style.css", "./dist/style.css", (err) => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "File Copied!",
      });
    });
  });
};


//call to initialize app
new Prompt()
  .promptManager()
  .then(new Prompt().promptEmployee)
  .then((answers) => {
    return generateHTML(answers);
  })
  .then((htmlData) => {
    //console.log(htmlData)
    return writeToFile(htmlData);
  })
  .then(writeFileResponse => {
    return copyFile();
  })
  .catch((err) => {
    console.log(err);
  });