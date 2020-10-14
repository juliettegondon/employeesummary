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
const outputPath = path.join(OUTPUT_DIR, "main.html");

const render = require("./lib/htmlRenderer");


//global variables for CLI input

let team = [];

//manager questions to be asked in command line:
function managerQs(){    
inquirer.prompt([
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
]) .then(function (managerA){
    const manager = new Manager(
        managerA.mName,
        managerA.mEmail,
        managerA.officeNumber,
        "Manager"
    );
        team.push(manager);
        finishTeam();
})
}
//main employee questions to be asked in command line:
   function employeeQs(){
    inquirer.prompt([
        {
            type: 'list',
            name: 'jobTitle',
            message: `what is the employee's job title?`,
            choices: ['engineer', 'intern', 'manager']
        }
]).then(function(responses){
    switch (responses.jobTitle) {
        case "engineer": 
        engineerPrompts();
        break;
        case "intern":
        internPrompts();
        break;
        case "manager":
        managerQs();
        break;
        default:
    }
})
;
   }

//engineer questions to be asked in command line:
function engineerPrompts() {
    inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: `what is the github username?`,
    },
    {
        type: 'input',
        name: 'name',
        message: `What is the engineer's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `what is the engineer's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `what is the engineer's email adress?`,
    }
    ]) .then(function (engineerA){
    const engineer = new Engineer(
        engineerA.github,
        engineerA.name,
        engineerA.id,
        engineerA.email,
        "Engineer"
    );
        team.push(engineer);
        finishTeam();
})
}

//intern questions to be asked in command line:
function internPrompts() {
    inquirer
    .prompt([
    {
        type: 'input',
        name: 'school',
        message: `where does the intern study?`,
    },
    {
        type: 'input',
        name: 'name',
        message: `What is the intern's name?`,
    },
    {
        type: 'input',
        name: 'id',
        message: `what is the intern's id?`,
    },
    {
        type: 'input',
        name: 'email',
        message: `what is the intern's email adress?`,
    }
])}

const finishTeam = () => {
    inquirer.prompt([
        {
        type: 'list',
        name: 'addMore',
        message: 'Add another employee?',
        choices: ['add engineer', 'add intern', 'no more']
        }
    ])
        .then(function(finish){
            switch (finish.addMore) {
                case "add engineer": 
                engineerPrompts();
                break;
                case "add intern":
                internPrompts();
                break;
                default:
                    createTemplate();
            
            }
        });
};

function createTemplate(){
    fs.writeFileSync(outputPath, render(team));
}
    // function call to initialize program !!!!!!!!!!????!!!!!!
employeeQs();




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
