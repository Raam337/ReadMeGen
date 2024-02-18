const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
{   type: 'input',
    message: 'What is the project name?',
    name: 'title'},

{   type: 'input',
    message: 'Write a description of the project:',
    name: 'description'},

{   type: 'input',
    message: 'Write an installation instructions:',
    name: 'installation'},

{   type: 'input',
    message: 'Describe how to use the project:',
    name: 'usage'},

{   type: 'list',
    message: 'What is the license used in the project?',
    name: 'license',
    choices: ["MIT","CC0","ODC","No License"],
    default:0},

{   type: 'input',
    message: 'How to contribute to the project?',
    name: 'contribute'},

{   type: 'input',
    message: 'How to test the project?',
    name: 'tests'},
{   type: 'input',
    message: 'What is your github user name?',
    name: 'username'},
{   type: 'input',
    message: 'What is your email address?',
    name: 'email'},
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName,data,(e)=>{});
}

// function to initialize program
function init() { //main code
    inquirer.prompt(questions)
    .then((answers)=>{
        const mdString = generateMarkdown(answers);
        writeToFile("MyREADME.md",mdString);
    });
}

// function call to initialize program
init();
