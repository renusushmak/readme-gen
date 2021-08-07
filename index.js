// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [ 
  {
    type: 'input',
    name: 'title',
    message: 'Enter Name of the project: '
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter description of the project: '
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install?  '
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use it? '
  },
  {
    type: 'input',
    name: 'license',
    message: 'License'
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'How to start contributing'
  },
  {
    type: 'input',
    name: 'testing',
    message: 'How to test'
  },
  {
    type: 'list',
    message: 'Technologies Used: ',
    name: 'technologies',
    choices: ['node', 'react', 'mongodb', 'sqlize']
  },
  {
    type: 'checkbox',
    message: 'Languages Used:',
    name: 'languages',
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
        console.log(data);
        // Bonus: Generate the name of your user file from their input
        writeToFile("README.md", generateMarkdown(data));
      });
    

}

// Function call to initialize app
init();

