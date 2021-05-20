// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let message = license.replace(/ /g, "%20");
  if (license !== "None")
    return `![License](https://img.shields.io/badge/license-${message}-green.svg)`;
  else return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let link = ``;
  if (license === "MIT") {
    link = "https://opensource.org/licenses/MIT";
    return link;
  } else if (license === "Apache 2") {
    link = "https://opensource.org/licenses/Apache-2.0";
    return link;
  } else if (license === "BSD 3") {
    link = "https://opensource.org/licenses/BSD-3-Clause";
    return link;
  } else if (license === "BSD 2") {
    link = "https://opensource.org/licenses/BSD-2-Clause";
    return link;
  } else if (license === "MPL 2") {
    link = "https://opensource.org/licenses/MPL-2.0";
    return link;
  } else if (license === "None") {
    link = "";
    return link;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  } else {
    return `\n ## License
    \n The application is covered under the license ${license}. For more Info please visit [License Info](${renderLicenseLink(
      license
    )})`;
  }
}

//function rendering table of content section
function renderTableOfContents(answers) {
  let contents = ``;
  if (answers.technologyIsTrue) {
    contents += `\n[Technology](#Technology)\n`;
  }
  if (answers.contributorsIstrue) {
    contents += `\n[Contributors](#Contributors)\n`;
  }
  if (answers.addingTestIsTrue) {
    contents += `\n[Tests](#Tests)\n`;
  }

  if (answers.tableContents) {
    return `
  ## Table of Contents
  [Installation](#Installation)\n
  [Usage](#Usage)\n
  [License](#License)\n
  ${contents}  `;
  } else return "";
}

function renderSection(data, sectionName) {
  let infoArray = [];
  if (sectionName === "Installation") {
    infoArray = data.installationInfo.split(",");
  } else if (sectionName === "Usage") {
    infoArray = data.usageInfo.split(",");
  } else if (sectionName === "Technology") {
    if (data.technologyIsTrue) {
      infoArray = data.technologyInfo.split(",");
    } else return "";
  } else if (sectionName === "Contributors") {
    if (data.contributorsIstrue) {
      infoArray = data.contributorInfo.split(",");
    } else return "";
  } else if (sectionName === "Tests") {
    if (data.addingTestIsTrue) {
      infoArray = data.testInfo.split(",");
    } else return "";
  } else if (sectionName === "Questions") {
    return `
  // \n ## ${sectionName}\n
  // If you have any questions about project you can either contact me or visit my github profile.\n 
  // Link to my Github: [${data.githubUser}](https://github.com/${data.githubUser})\n
  // Email address :[${data.emailId}](mailto:${data.emailId})
  // `;
  }

  let sectionInfo = `\n ## ${sectionName}\n`;
  infoArray.forEach((element) => {
    sectionInfo += `- ${element.trim()}\n`;
  });
  return sectionInfo;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}
  ${renderLicenseBadge(data.licenseInfo)}

  ## Description 
  ${data.description}

  ${renderTableOfContents(data)}
   
  ${renderSection(data, "Installation")}

  ${renderSection(data, "Usage")}

  ${renderLicenseSection(data.licenseInfo)}

  ${renderSection(data, "Technology")}

  ${renderSection(data, "Contributors")}  

  ${renderSection(data, "Tests")}

  ${renderSection(data, "Questions")}
  



`;
}

module.exports = generateMarkdown;

// ${renderInstallationSection(data.installationInfo)}

//   ${renderUsageSection(data.usageInfo)}

//   ${renderLicenseSection(data.licenseInfo)}

//   ${rendertTechnologySection(data.technologyInfo)}
