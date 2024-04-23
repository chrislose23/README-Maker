const inquirer = require('inquirer');
const colors = require('colors');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
    {
        type: 'input',
        name: 'title',
        message: colors.magenta('What is the project title?')
    },
    {
        type: 'checkbox',
        name: 'badges',
        message: colors.magenta('What code does your project utilize?'),
        choices: [
            colors.yellow("HTML"), 
            colors.yellow("CSS"), 
            colors.yellow("JavaScript"), 
            colors.yellow("Node.js"), 
            colors.yellow("Express.js"), 
            colors.yellow("MySQL"), 
            colors.yellow("NoSQL"), 
            colors.yellow("React"), 
        ],
    },
    {
        type: 'input',
        name: 'description',
        message: colors.magenta('Write a description of your project. (What, Why, and How)')
    },
    {
        type: 'input',
        name: 'install',
        message: colors.magenta('What are the steps to install your project?')
    },
    {
        type: 'input',
        name: 'credits',
        message: colors.magenta('List your collaborators and their GitHub profiles.')
    },
    {
        type: 'list',
        name: 'license',
        message: colors.magenta('What license are you using for your project?'),
        choices: [
            colors.yellow("Apache"), 
            colors.yellow("GNU General Public"), 
            colors.yellow("MIT"), 
            colors.yellow("BSD 2-Clause"), 
            colors.yellow("BSD 3-Clause"), 
            colors.yellow("Boost Software"), 
            colors.yellow("Eclipse Public"), 
            colors.yellow("Mozilla Public"), 
            colors.yellow("The Unilicense"),
            ""
        ]
    },
    {
        type: 'input',
        name: 'contribute',
        message: colors.magenta('How can other developers contribute?')
    },
    {
        type: 'input',
        name: 'tests',
        message: colors.magenta('Provide examples of how to run any tests you created.')
    },
    {
        type: 'input',
        name: 'github',
        message: colors.magenta('What is the link to your GitHub Repo?')
    },
    {
        type: 'input',
        name: 'email',
        message: colors.magenta('What is your email address?')
    },
    {
        type: 'input',
        name: 'usageInputs',
        message: colors.magenta('Provide instructions for usage:'),
    },
    {
        type: 'input',
        name: 'usageScreenshot',
        message: colors.magenta('Provide a screenshot link:'),
        when: (answers) => answers.usageInputs !== undefined,
    },
    {
        type: 'confirm',
        name: 'addMoreUsage',
        message: colors.magenta('Do you want to add another usage input and screenshot?'),
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
                    message: colors.magenta('Provide instructions for usage:'),
                },
                {
                    type: 'input',
                    name: 'usageScreenshot',
                    message: colors.magenta('Provide a screenshot link:'),
                },
                {
                    type: 'confirm',
                    name: 'addMoreUsage',
                    message: colors.magenta('Do you want to add another usage input and screenshot?'),
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