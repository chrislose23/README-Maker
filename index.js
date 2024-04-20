// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'input',
        name: 'q2',
        message: 'What is Q2?'
    },
    {
        type: 'input',
        name: 'q3',
        message: 'What is Q3?'
    },
    {
        type: 'input',
        name: 'q4',
        message: 'What is Q4?'
    },
    {
        type: 'input',
        name: 'q5',
        message: 'What is Q5?'
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
