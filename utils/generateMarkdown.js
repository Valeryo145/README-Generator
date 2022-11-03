// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "Apache": 
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "IBM": 
      return "![License](https://img.shields.io/badge/License-IPL%201.0-blue.svg)";
    case "MIT":  
      return "![License](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "Mozilla": 
      return "![License](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)";
    case "No License": 
      return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "Apache": 
      return "https://opensource.org/licenses/Apache-2.0";
    case "IBM": 
      return "https://opensource.org/licenses/IPL-1.0";
    case "MIT":  
      return "https://opensource.org/licenses/MIT";
    case "Mozilla": 
      return "https://opensource.org/licenses/MPL-2.0";
    case "No License": 
      return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    var section =
    `## License
     The application was licensed with [${license}](${renderLicenseLink(license)})`;
    return section;
  }
  else
    return;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  
  ## Table of Contents

  - [Description](#Description)
  - [Installation](#installation) 
  - [Usage](#usage) 
  - [Contribution](#contribution) 
  - [Test](#test) 
  - [Credits](#credits) 
  - [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Contribution
  ${data.contribution}
  
  ## Test
  ${data.test}
  
  ## Credits
  ${data.credits}
 
  ${renderLicenseSection(data.license)}

  ## Questions
  For any questions please feel free to reach me at https://github.com/${data.githubUsername} & ${data.email}`
  
  return markdown;
}

module.exports = generateMarkdown;