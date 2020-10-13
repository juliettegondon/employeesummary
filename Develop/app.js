//node packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//require employees
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Employee = require("./lib/Employee");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


//global variables for CLI input

let team = [];


//main employee questions to be asked in command line:
    function mainEmployeeQ() {
        inquirer.prompt([
        {
            type: 'list',
            name: 'jobTitle',
            message: `what is the employee's job title?`,
            choices: ['engineer', 'intern', 'manager']
        },
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
        }

    ]) .then((answers) => {
       if (answers.jobTitle === 'manager') {
            managerQs();
       } else {
        employeeQs();
       }
       }
);
    }
        /////
    //manager questions to be asked in command line:
    function managerQs(){inquirer.prompt([
        {
            type: 'input',
            name: 'mName',
            message: `what is the manager's name?`
        }, 
        {
            type: 'input',
            name: 'mEmail',
            message: `what is the manager's email`
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'what is the office #?',
        }
    ])
        .then((answers) => {
            console.log('ANSWERS--->', answers.mName, answers.mEmail, answers.officeNumber);
            let managerCard = new Manager (answers.mName, answers.mEmail, answers.officeNumber);
        }); 
    }
/////////

      /*   (answers => {
         let name = answers.name;
            let id = answers.id;
            let email = answers.email; // CREATE IF STATEMENT FOR JOBTITLE SPECIFIC Q'S FOR ENGINEER & INTERN
            console.log('ANSWERS--->', answers, name, id, email)
    }) */
;


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
    // function call to initialize program !!!!!!!!!!????!!!!!!
/* init();

 */

