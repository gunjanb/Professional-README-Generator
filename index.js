// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "githubUser",
    message: "What is your Github User Name",
    validate: (githubUser) => {
      if (githubUser) {
        return true;
      } else {
        return "Please enter your github user name";
      }
    },
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is the Project Name",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter a Project Name";
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Please provide a short decription of your project",
    validate: (description) => {
      if (description) {
        return true;
      } else {
        return "Please enter description";
      }
    },
  },
  {
    type: "confirm",
    name: "tableContents",
    message: "Would you like to add table of contents in your README.md file",
    default: false,
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    console.log(response);
  });
}

// Function call to initialize app
init();
