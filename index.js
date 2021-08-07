// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [ {
    type: 'input',
    name: 'title',
    message: 'What is your name?'
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'contact',
    choices: ['email', 'phone', 'Slack', 'smoke signal']
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'stack',
    choices: ['HTML', 'CSS', 'JavaScript', 'SQL']
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
          return console.log(err);
        }
  
        console.log('Success!');
    });
}

// TODO: Create a function to initialize app
function init() {
  
    // Prompt the user
    inquirer
      .prompt(questions) // Write the user response to a file by chaining the below callback method to the prompt above.
      .then(function(data) {
        // Bonus: Generate the name of your user file from their input
        writeToFile("README.md", generateMarkdown(data));
      });
    

}

// Function call to initialize app
init();

