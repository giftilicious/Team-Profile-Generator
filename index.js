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
            message: "What is your team manager's name?"
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
}

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
            message: 'What type of team member would you like to add?',
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
}



function endProgram() {
    const htmlContent = generateHTML(employees);

    fs.writeFile('./dist/team.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
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
        <div class="p-24 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8" id="teamMembers">`
    // create loop
    teamMembers.forEach(emp => {
        let cardPart = ""
        if (emp.getRole() === 'Manager') {
            cardPart = `<p class="mt-3">Office No.: ${emp.officeNumber}</p>`
        } else if (emp.getRole() === 'Engineer') {
            cardPart = `<p class="mt-3">Github: ${emp.github}</p>`

        } else {
            cardPart = `<p class="mt-3">School: ${emp.school}</p>`
        }
        let card = `
        <div class="bg-white rounded-md shadow-xl" id="managerCard">
        <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${emp.name}</header>
        <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">coffee</span> ${emp.getRole()}</header>
        <div class="p-6">
            <p>ID: ${emp.id}</p>
            <p class="mt-3">Email: ${emp.email}</p>
            ${cardPart}
        </div>
    </div>`
        team += card
    })
    team += `</div>
    <script src="./index.js"></script>
    <script src="./lib/generateHTML.js"></script>
</body>
</html>`
    return team;
}

// Create class constructor
// class TeamMember {
//     constructor(name, id, email, misc) {
//         this.name = name;
//         this.id = id;
//         this.email = email;
//         this.misc = misc;
//     }

// }

// const manager = new TeamMember(`
// <div class="bg-white rounded-md shadow-xl" id="managerCard">
//             <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${this.name}</header>
//             <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">coffee</span> Manager</header>
//             <div class="p-6">
//                 <p>ID: ${this.id}</p>
//                 <p class="mt-3">Email: ${this.email}</p>
//                 <p class="mt-3">Office No.: ${this.misc}</p>
//             </div>
//         </div>
// `);

// const employee = new TeamMember(`
// <div class="bg-white rounded-md shadow-xl" id="employeeCard">
//             <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${this.name}</header>
//             <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">badge</span> Employee</header>
//             <div class="p-6">
//                 <p>ID: ${this.id}</p>
//                 <p class="mt-3">Email: ${this.email}</p>
//             </div>
//         </div>
// `);

// const engineer = new TeamMember(`
// <div class="bg-white rounded-md shadow-xl" id="engineerCard">
//             <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${this.name}</header>
//             <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">build</span> Engineer</header>
//             <div class="p-6">
//                 <p>ID: ${this.id}</p>
//                 <p class="mt-3">Email: ${this.email}</p>
//                 <p class="mt-3">Github: ${this.misc}</p>
//             </div>
//         </div>
// `);

// const intern = new TeamMember(`
// <div class="bg-white rounded-md shadow-xl" id="internCard">
//             <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${this.name}</header>
//             <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">school</span> Intern</header>
//             <div class="p-6">
//                 <p>ID: ${this.id}</p>
//                 <p class="mt-3">Email: ${this.email}</p>
//                 <p class="mt-3">School: ${this.misc}</p>
//             </div>
//         </div>
// `);

// function mgrProfile(manager) {
//     return manager;
// }

// // Create function that returns card based on user choice
// function employeeChoice(teamMember) {
//     if (teamMember === "Employee")
//         return employee;

//     if (teamMember === "Employee")
//         return employee;

//     if (teamMember === "Engineer")
//         return engineer;

//     if (teamMember === "Intern")
//         return intern;

//     if (teamMember === "I don't want to add anymore team members") {
//         console.log('Thank you. You can now see your team.');
//         return ""
//     }
// }







// const questions = [
//     {
//         message: "Let's build your team"
//     },
//     {
//         type: 'input',
//         name: 'manager',
//         message: "What is your team manager's name?"
//     },
//     {
//         type: 'input',
//         name: 'mgrID',
//         message: "What is your team manager's ID?"
//     },
//     {
//         type: 'email',
//         name: 'mgrEmail',
//         message: "What is your team manager's email?"
//     },
//     {
//         type: 'input',
//         name: 'officeNum',
//         message: "What is your team manager's office number?"
//     },
//     {
//         type: 'list',
//         message: 'What type of team member would you like to add?',
//         name: 'teamMember',
//         choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
//     },
//     {
//         type: 'input',
//         name: 'employee',
//         message: "What is your employee's name?"
//     },
//     {
//         type: 'input',
//         name: 'employID',
//         message: "What is your employee's ID?"
//     },
//     {
//         type: 'email',
//         name: 'employEmail',
//         message: "What is your employee's email?"
//     },
//     {
//         type: 'list',
//         message: 'What type of team member would you like to add?',
//         name: 'teamMember',
//         choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
//     },
//     {
//         type: 'input',
//         name: 'engineer',
//         message: "What is your engineer's name?"
//     },
//     {
//         type: 'input',
//         name: 'engineerID',
//         message: "What is your engineer's ID?"
//     },
//     {
//         type: 'email',
//         name: 'engineerEmail',
//         message: "What is your engineer's email?"
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: "What is your engineer's github name?"
//     },
//     {
//         type: 'list',
//         message: 'What type of team member would you like to add?',
//         name: 'teamMember',
//         choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
//     },
//     {
//         type: 'input',
//         name: 'intern',
//         message: "What is your intern's name?"
//     },
//     {
//         type: 'input',
//         name: 'internID',
//         message: "What is your intern's ID?"
//     },
//     {
//         type: 'email',
//         name: 'internEmail',
//         message: "What is your intern's email?"
//     },
//     {
//         type: 'input',
//         name: 'school',
//         message: "What is your intern's school name?"
//     },
//     {
//         type: 'list',
//         message: 'What type of team member would you like to add?',
//         name: 'teamMember',
//         choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"],
//     },
// ];

// // Create a function to write HTML file
// function writeFile(fileName, data) {
//     return fs.writeFile(fileName, data, (err) =>
//       err ? console.log(err) : console.log('Thank you. You can now see your team.'))
//   }

//   // Create a function to initialize app
//   function init() {
//     inquirer.prompt(questions).then((answers) => {
//       console.log(answers)
//       writeFile('team.html', generateHTML(answers))
//     })
//   }

//   // Function call to initialize app
//   init();







// .then((answers) => {
//     const htmlContent = generateHTML(answers);

//     fs.writeFile('/lib/team.html', htmlContent, (err) =>
//         err ? console.log(err) : console.log('Successfully created index.html!')
//     );
// });






    // ])
    // .then((data) => {
    //     const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    //     fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
    //         err ? console.log(err) : console.log('Success!')
    //     );
    // });

// }).then(function (data) {
//     console.log(data)

//     let uvIndex = document.createElement("p");
//     uvIndex.textContent = "UV Index: " + data.current.uvi;
//     currentWeatherEl.appendChild(uvIndex);

//     let fiveday = document.querySelector('#fiveday');

//     fiveday.innerHTML = ""
//     //for loop to create the card element
//     for (let index = 0; index < 5; index++) {
//         //put the data from the api call on the element
//         let card = `
//         <div id="fiveday">
//             <div class="card card-body" style="width: 16rem; height: 20rem;">                                   
//                 <p>Temperature: ${data.daily[index].feels_like.day} °F</p>                 
//                 <p>Wind: ${data.daily[index].wind_gust} MPH</p>                 
//                 <p>Humidity: ${data.daily[index].humidity}</p>                 
//                 <p>UV Index: ${data.daily[index].uvi}</p>                 
//             </div>
//         </div>
//     `
//         //append to an existing element on the html
//         fiveday.innerHTML += card
//     }