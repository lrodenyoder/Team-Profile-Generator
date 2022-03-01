//VARIABLES
const inquirer = require('inquirer');
const fs = require('fs');
const generateHTML = require('./src/generateHTML.js');
//prompted questions to get user input
const questions = [
    {
        type: 'input',
        name: 'manager-name',
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
];

//FUNCTIONS
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

//initialize app
const init = (htmlData) => {
    console.log(`
    Generate a Team Profile
    `);

    return inquirer.prompt(questions);
};

//call to initialize app
init()
    // .then((data) => {
    //     return generateHTML(data);
    // })
    // .then((htmlData) => {
    //     return writeToFile(htmlData);
    // })
    // .then((writeFileResponse) => {
    //     console.log(writeFileResponse);
    // })
    .catch((err) => {
        console.error(err);
    });