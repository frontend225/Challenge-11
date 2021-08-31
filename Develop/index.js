const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
       type: "input",
       name: "github",
       message: "Input GitHub username"   
}

];

// function to write README file
function writeToFile(fileName, data) {
}
       // tdb fs.writeFileSync( ..., filename, data);
      

// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then({inquirerResponses) => {
        console.log("Generating Readme...");
        writeToFile("README.md", generateMarkdown({...inquirerResponses}));
    })




}

// function call to initialize program
init();
