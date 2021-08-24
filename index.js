// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require ('fs');

const generatorMarkdown = require('./utils/generateMarkdown');
const { type } = require("os");
// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What's the title of your project? ",
    name: "Title",

},
 {
    type: "input",
    messsage: "What is the project about/ Give detailed description of your project",
    name: "Description",
}, 
 {
     type:"List",
      message: "Table of Contents",
      choices: ["Description" , "Installation", "Usage", "Credits", "License"],
      name: "Table of Contents",

      
  }, {
     type:"input",
       Message: "What are the steps required to install to run this app",
       name: "Installation",
   }, {
      type:"input",
       message: "How is the app used? Give instruction",
       name:"Usage",
 },
 {
    type:"list",
    message: "What license is being used?,(MIT)",
    choices:["MIT", "GNU"],
    name: "License",
},

  {
    type: "input",
     message: "Who can be credited to this project?:",
     name: "Credits",
 }, {     type: "input",
     message: "What commands are needed to test this app",
     name: "Test",
 }, {
     type: "input",
     message: "Contact Info for inquiries",
     name: "Questions",
 }, {
     type: "input",
     message: 'What is your Github username?',
     name: 'Username',
 }, {
     type: 'input',
     message: 'What is your email address?',
     name: 'Email'
 },

]


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        // console.log(fileName)
        // console.log(data)
        if(err) {
            return console.log(err)
        }else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
          writeToFile("README.md", generatorMarkdown(data));
    })
} 



// Function call to initialize app
init();
