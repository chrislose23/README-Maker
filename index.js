// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Write a description of your project. (What, Why, and How)'
    },
    {
        type: 'input',
        name: 'install',
        message: 'What are the steps to install your project?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples of use.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List your collaborators and their GitHub profiles.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for your project?',
        choices: [
            "Apache", 
            "GNU General Public", 
            "MIT", 
            "BSD 2-Clause", 
            "BSD 3-Clause", 
            "Boost Software", 
            "Eclipse Public", 
            "Mozilla Public", 
            "The Unilicense"
        ],
    },
    {
        type: 'input',
        name: 'contribute',
        message: 'How can other developers contribute?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide examples of how to run any tests you created.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'For application questions, where can you be contacted?'
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    console.log('README.md has been generated sucessfully!');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown)
    });
}

// Function call to initialize app
init();
