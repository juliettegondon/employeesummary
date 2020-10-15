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
        name: 'id',
        message: `what is the manager's id`
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
        managerA.id,
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
        engineerA.name,
        engineerA.id,
        engineerA.email,
        engineerA.github,
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
])
.then(function (internA){
    const intern = new Intern(
        internA.name,
        internA.id,
        internA.email,
        internA.school,
        "Intern"
    );
        team.push(intern);
        finishTeam();
})
}

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
    fs.writeFile(outputPath, render(team), function(error){
        if (error) throw error;
        console.log("success")
    });
}
    // function call to initialize program !!!!!!!!!!????!!!!!!
employeeQs();
