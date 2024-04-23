const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project title?'
    },
    {
        type: 'checkbox',
        name: 'badges',
        message: 'What code does your project utilize?',
        choices: [
            "HTML", 
            "CSS", 
            "JavaScript", 
            "Node.js", 
            "Express.js", 
            "MySQL", 
            "NoSQL", 
            "React", 
        ],
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
            "The Unilicense",
            ""
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
        name: 'github',
        message: 'What is the link to your GitHub Repo?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
    {
        type: 'input',
        name: 'usageInputs',
        message: 'Provide instructions for usage:',
    },
    {
        type: 'input',
        name: 'usageScreenshot',
        message: 'Provide a screenshot link:',
        when: (answers) => answers.usageInputs !== undefined,
    },
    {
        type: 'confirm',
        name: 'addMoreUsage',
        message: 'Do you want to add another usage input and screenshot?',
        default: false,
        when: (answers) => answers.usageInputs !== undefined,
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
            return;
        }
    console.log(colors.green('README.md has been generated sucessfully!'));
    });
}

function init() {
    inquirer.prompt(questions).then((answers) => {
        if (answers.usageInputs && answers.usageScreenshot) {
            answers.usageInputs = `${answers.usageInputs}\n\n![Screenshot](${answers.usageScreenshot})`;
        }
        function askAdditionalUsage() {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'usageInputs',
                    message: 'Provide instructions for usage:',
                },
                {
                    type: 'input',
                    name: 'usageScreenshot',
                    message: 'Provide a screenshot link:',
                },
                {
                    type: 'confirm',
                    name: 'addMoreUsage',
                    message: 'Do you want to add another usage input and screenshot?',
                    default: false,
                },
            ]).then((additionalAnswers) => {
                
                if (additionalAnswers.usageInputs && additionalAnswers.usageScreenshot) {
                    answers.usageInputs += `\n\n${additionalAnswers.usageInputs}\n\n![Screenshot](${additionalAnswers.usageScreenshot})`;
                }
                if (additionalAnswers.addMoreUsage) {
                    askAdditionalUsage();
                } else {
                    
                    const markdown = generateMarkdown(answers);
                    writeToFile('README.md', markdown);
                }
            });
        }

        if (answers.addMoreUsage) {
            askAdditionalUsage();
        } else {
        const markdown = generateMarkdown(answers);
        writeToFile('README.md', markdown);
        }
    });
}

init();