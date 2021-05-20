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
    name: "mailId",
    message: "What is your mailID",
    validate: (mailId) => {
      if (mailId) {
        return true;
      } else {
        return "Please enter your MailId";
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
  {
    type: "input",
    name: "installationInfo",
    message:
      "What are the steps required to install your project?(please seperate the steps by ',')",
    validate: (installationInfo) => {
      if (installationInfo) {
        return true;
      } else return "Please enter installation steps";
    },
  },
  {
    type: "input",
    name: "usageInfo",
    message:
      "Please provide instructions and examples for use.(please seperate the instructions by ',')",
    validate: (usageInfo) => {
      if (usageInfo) {
        return true;
      } else return "Please enter usage steps";
    },
  },
  {
    type: "list",
    name: "licenseInfo",
    message: "choose a license for your project",
    choices: ["Apache 2", "BSD 3", "BSD 2", "MIT", "MPL 2", "None"],
  },
  {
    type: "confirm",
    name: "contributorsIstrue",
    message: "Would you like to add contributors?",
    default: false,
  },
  {
    type: "input",
    name: "contributorInfo",
    message:
      "Please enter contributors information.(Please seperate the contributors name by ',')",
    validate: (contributorInfo) => {
      if (contributorInfo) {
        return true;
      } else return "Please enter contributor Information";
    },
    when: (answer) => {
      //   console.log("answer is  ", answer);
      if (answer.contributorsIstrue) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "addingTestIsTrue",
    message: "Would you like to add Tests?",
    default: false,
  },
  {
    type: "input",
    name: "testInfo",
    message: "Please enter test information.(Please seperate the tests by ',')",
    validate: (testInfo) => {
      if (testInfo) {
        return true;
      } else return "Please enter test Information";
    },
    when: (answer) => {
      //   console.log("answer is  ", answer);
      if (answer.addingTestIsTrue) {
        return true;
      } else {
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "technologyIsTrue",
    message: "Would you like to add Technology stack used?",
    default: false,
  },
  {
    type: "input",
    name: "technologyInfo",
    message:
      "Please enter Technology Stack used.Please seperate the technologies by ',')",
    validate: (technologyInfo) => {
      if (technologyInfo) {
        return true;
      } else return "Please enter technology used";
    },
    when: (answer) => {
      //   console.log("answer is  ", answer);
      if (answer.technologyIsTrue) {
        return true;
      } else {
        return false;
      }
    },
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
