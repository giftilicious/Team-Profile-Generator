const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const employees = [];

function makeManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: "Let's build your team. \n What is your team manager's name?"
        },
        {
            type: 'input',
            name: 'mgrID',
            message: "What is your team manager's ID?"
        },
        {
            type: 'email',
            name: 'mgrEmail',
            message: "What is your team manager's email?"
        },
        {
            type: 'input',
            name: 'officeNum',
            message: "What is your team manager's office number?"
        },
    ]).then(answers => {
        const manager = new Manager(answers.manager, answers.mgrID, answers.mgrEmail, answers.officeNum);
        employees.push(manager);
        chooseTeammate();
    })
}
makeManager();

function makeEngineer() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engineer',
            message: "What is your engineer's name?"
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is your engineer's ID?"
        },
        {
            type: 'email',
            name: 'engineerEmail',
            message: "What is your engineer's email?"
        },
        {
            type: 'input',
            name: 'github',
            message: "What is your engineer's github name?"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineer, answers.engineerID, answers.engineerEmail, answers.github);
        employees.push(engineer);
        chooseTeammate();
    })
};

function makeIntern() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intern',
            message: "What is your intern's name?"
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is your intern's ID?"
        },
        {
            type: 'email',
            name: 'internEmail',
            message: "What is your intern's email?"
        },
        {
            type: 'input',
            name: 'school',
            message: "What is your intern's school name?"
        },
    ]).then(answers => {
        const intern = new Intern(answers.intern, answers.internID, answers.internEmail, answers.school);
        employees.push(intern);
        chooseTeammate();
    })
}

function chooseTeammate() {
    inquirer.prompt([
        {
            type: 'list',
            message: "Let's add another team member. \n What type of role would you like to add?",
            name: 'teamMember',
            choices: ["Engineer", "Intern", "I don't want to add anymore team members"]
        }
    ]).then(answers => {
        if (answers.teamMember === 'Engineer') {
            makeEngineer();
        }
        else if (answers.teamMember === 'Intern') {
            makeIntern();
        }
        else {
            endProgram();
        }
    })
};

function endProgram() {
    const htmlContent = generateHTML(employees);

    fs.writeFile('./dist/team.html', htmlContent, (err) =>
        err ? console.log(err) : console.log("Success! You've created your team. Check team.html!")
    );
};

function generateHTML(teamMembers) {
    let team = `<!doctype html>
    <html>
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Outlined" rel="stylesheet">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile</title>
    </head>
    
    <body>
        <!-- Header -->
        <header class="p-10 text-white text-center bg-gradient-to-r from-purple-700 via-purple-600 to-purple-900 ...">
            <h1>Team Profile</h1>
        </header>
        <!-- Profile Cards-->
        <div class="container mx-auto p-24 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8" id="teamMembers">`

    teamMembers.forEach(emp => {
        let card = ""
        if (emp.getRole() === 'Manager') {
            card = `<div class="bg-white rounded-md shadow-xl" id="managerCard">
            <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${emp.name}</header>
            <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">coffee</span> ${emp.getRole()}</header>
            <div class="p-10">
                <p>ID: ${emp.id}</p>
                <p class="mt-3">Email: ${emp.email}</p>
                <p class="mt-3">Office No.: ${emp.officeNumber}</p>
            </div>
        </div>`
        } else if (emp.getRole() === 'Engineer') {
            card = `<div class="bg-white rounded-md shadow-xl" id="engineerCard">
            <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${emp.name}</header>
            <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">build</span> ${emp.getRole()}</header>
            <div class="p-10">
                <p>ID: ${emp.id}</p>
                <p class="mt-3">Email: ${emp.email}</p>
                <p class="mt-3">Github: ${emp.github}</p>
            </div>
        </div>`

        } else {
            card = `<div class="bg-white rounded-md shadow-xl" id="internCard">
            <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${emp.name}</header>
            <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">school</span> ${emp.getRole()}</header>
            <div class="p-10">
                <p>ID: ${emp.id}</p>
                <p class="mt-3">Email: ${emp.email}</p>
                <p class="mt-3">School: ${emp.school}</p>
            </div>
        </div>`
        }

        team += card
    })
    team += `</div>
    <script src="./index.js"></script>
    <script src="./lib/generateHTML.js"></script>
    </body>
    </html>`
    return team;
};
