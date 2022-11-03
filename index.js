// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    { 
    message: 'What is the title of the project?',
    type: 'input',
    name: 'title',
},
{
    message: 'Provide a brief description of the project',
    type: 'input',
    name: 'description',
},
{
    message: 'Explain any installations for this project?',
    type: 'input',
    name: 'install',
},
{
    message: 'What are the usage instructions of the project',
    type: 'input',
    name: 'usage',
},
{
    message: 'Describe the contribution requirements:',
    type: 'input',
    name: 'contribution',
},
{
    message: 'Describe and Enter the testing instructions here',
    type: 'input',
    name: 'test',
},
{
    message: 'Choose a license for this project',
    type: 'list',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'IBM', 'Mozilla', 'No License']
},
{
    message: 'Enter credits here',
    type: 'input',
    name: 'credits',
},
{
    message: 'Enter your GitHub Username',
    type: 'input',
    name: 'githubUsername',
},
{
    message: 'Enter your email address',
    type: 'input',
    name: 'email',
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, generateMarkdown(data), 
    (error) => error ? console.error(error) : console.log("\nReadME has been generated!.")
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) =>
     writeToFile('README.md', response));
}

// Function call to initialize app
init();