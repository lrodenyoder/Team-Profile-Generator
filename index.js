//VARIABLES
const Prompt = require('./lib/Prompt');
const generateHTML = require('./src/generateHTML.js');

new Prompt().promptManager();




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