// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

    return ` ${license}`
  }
  
  
  
  
  
  
  
  // TODO: Create a function that returns the license link
  // If there is no license, return an empty string
  function renderLicenseLink(license) { }
  
  // TODO: Create a function that returns the license section of README
  // If there is no license, return an empty string
  function renderLicenseSection(license) {
    if (license === "No License") {
      return '';
    }
    return`
  ${license}
    `
  }
  
  // TODO: Create a function to generate markdown for README 
  function generateMarkdown(data) {
    return `# ${data.title}
  
    ## Description
    ${data.Description}
  
    ## License
    under${data.License}license
    ![github license](https://img.shields.io/badge/%3Clicense%3E-%3CMIT%3E-brightgreen%3E	
      )
  
  
   ## Table of contents
   ${data.TableOfContents}
  
   ## Installation
   ${data.Installation}
  
   ## Usage
   ${data.Usage}
  
   ## Credits
   ${data.Credits}
  
   ## Test
   ${data.Test}
  
   ## Questions
   ${data.Questions}
  
   ## Username
   ${data.Username}
  
   ## Email
   ${data.Email}
  
  `;
  }
  
  module.exports = generateMarkdown;
  //  https://github.com/${data.Username}/${data.Title}