const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Engineer = require("./lib/engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const populateTeam = require("./src/template");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "myteam.html");


teamProfile = [];

// Function to start the team profile generator
function startGenerator(){
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
                    newManager();
                    break;
                case "Engineer":
                    newEngineer();
                    break;
                case "Intern":
                    newIntern();
                    break;
                default:
                    buildOutHtml();
                    console.log(teamProfile);

            }
        })
    }

    // Function to create HTML after user inputs from prompts
    function buildOutHtml(){
        fs.writeFileSync(outputPath, populateTeam(teamProfile), "utf-8")
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
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamProfile.push(manager);
            newTeam();
        })
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
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamProfile.push(engineer);
            newTeam();
        })
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
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamProfile.push(intern);
            newTeam();
        })
    }
newTeam();
}
startGenerator();