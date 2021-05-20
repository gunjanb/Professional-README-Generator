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
    return `The application is covered under the license ${license}.For more Info please visit ${renderLicenseLink(
      license
    )}`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.projectTitle}\n
  ${renderLicenseBadge(data.licenseInfo)}
  
  ## Description
  ${data.description}\n
  



`;
}

module.exports = generateMarkdown;
