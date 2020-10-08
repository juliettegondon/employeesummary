//node packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

//global variables for CLI input
let name;
let id;
let email;
let jobtitle;
let teammembers;

//main employee questions to be asked in command line:
function employeePrompts() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'name',
        message: `What is the employee's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `what is the employee's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `what is the employee's email adress?`,
    }, 
    {
        type: 'input',
        name: 'jobtitle',
        message: `what is the employee's job title?`,
    },
    {
        type: 'list',
        name: 'jobtitle',
        message: `what is the employee's job title?`,
        choices: ['manager', 'engineer', 'intern']
    }
])}

//manager questions to be asked in command line:
function managerPrompts() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'officenumber',
        message: 'what is the office #?',
    }
])}
//engineer questions to be asked in command line:
function engineerPrompts() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'github',
        message: `what is the employee's github username?`,
    }
])}

//intern questions to be asked in command line:
function internPrompts() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'school',
        message: `where does the intern study?`,
    }
])}

// function to initialize program
function init() {
    inquirer
      .prompt(questions)
      .then(answers => {
        console.log('ANSWERS--->',answers);
    })
    };

    // function call to initialize program
init();

//not sure what these are but they were included in starter code
/* const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
 */

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
