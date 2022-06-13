const inquirer = require("inquirer");
const fs = require("fs");

const teamProfile = [];

// Function to start the prompt asking which team member
// Switch case for each option 

function newTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "employeeTypePrompt",
            message: "What type of employee are you adding to the team?",
            choices: ["Manager", "Engineer", "Intern", "None"]
        }
    ]).then(function (userInput){
        switch(userInput.employeeTypePrompt){
            case "Manager":
                addManager();
                break;
            case "Engineer":
                addEngineer();
                break;
            case "Intern":
                addIntern();
                break;
            default:
                buildOutHtml();

        }
    })
}

// Function to create HTML after user inputs from prompts
function buildOutHtml(){
    fs.writeFile()
}

// Function to prompt manager questions when selected from newTeam Prompt
function newManager() {
    inquirer.prompt ([
        {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is the manager's id number?"
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email?"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
        }
    ])
}
// Function to prompt engineer questions when selected from newTeam Prompt
function newEngineer(){
    inquirer.prompt([
        { 
            type: "input",
            name: "engineerName",
            message: "What is the engineer's name?"
        },
        {
            type: "input",
            name: "engineerId",
            message: "What is the engineer's id number?"
        },
        {
            type: "input",
            name: "engineerEmail",
            message: "What is the engineer's email?"
        },
        {
            type: "input",
            name: "engineerGithub",
            message: "What is the engineer's github username?"
        }
    ])
}
// Function to prompt intern questions when selected from newTeam Prompt
function newIntern(){
    inquirer.prompt([
        {
            type: "input",
            name: "internName",
            message: "What is the intern's name?"
        },
        {
            type: "input",
            name: "internId",
            message: "What is the intern's id number?"
        },
        {
            type: "input",
            name: "internEmail",
            message: "What is the intern's email?"
        },
        {
            type: "input",
            name: "internSchool",
            message: "Where does the intern attend school?"
        }
    ])
}