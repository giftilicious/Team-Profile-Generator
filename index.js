const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateHTML = require('./lib/generateHTML.js');

const questions = [
    {
        message: "Let's build your team"
    },
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
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMember',
        choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
    },
    {
        type: 'input',
        name: 'employee',
        message: "What is your employee's name?"
    },
    {
        type: 'input',
        name: 'employID',
        message: "What is your employee's ID?"
    },
    {
        type: 'email',
        name: 'employEmail',
        message: "What is your employee's email?"
    },
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMember',
        choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
    },
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
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMember',
        choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
    },
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
    {
        type: 'list',
        message: 'What type of team member would you like to add?',
        name: 'teamMember',
        choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"],
    },
];

// Create a function to write HTML file
function writeFile(fileName, data) {
    return fs.writeHTML(fileName, data, (err) =>
      err ? console.log(err) : console.log('Thank you. You can now see your team.'))
  }
  
  // Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((answers) => {
      console.log(answers)
      writeFile('team.html', generateHTML(answers))
    })
  }
  
  // Function call to initialize app
  init();




// Create class constructor
class TeamMember {
    constructor(name, id, email, misc) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.misc = misc;
    }

}

const manager = new TeamMember(`
<div class="bg-white rounded-md shadow-xl" id="managerCard">
            <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${this.name}</header>
            <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">coffee</span> Manager</header>
            <div class="p-6">
                <p>ID: ${this.id}</p>
                <p class="mt-3">Email: ${this.email}</p>
                <p class="mt-3">Office No.: ${this.misc}</p>
            </div>
        </div>
`);

const employee = new TeamMember(`
<div class="bg-white rounded-md shadow-xl" id="employeeCard">
            <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${this.name}</header>
            <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">badge</span> Employee</header>
            <div class="p-6">
                <p>ID: ${this.id}</p>
                <p class="mt-3">Email: ${this.email}</p>
            </div>
        </div>
`);

const engineer = new TeamMember(`
<div class="bg-white rounded-md shadow-xl" id="engineerCard">
            <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${this.name}</header>
            <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">build</span> Engineer</header>
            <div class="p-6">
                <p>ID: ${this.id}</p>
                <p class="mt-3">Email: ${this.email}</p>
                <p class="mt-3">Github: ${this.misc}</p>
            </div>
        </div>
`);

const intern = new TeamMember(`
<div class="bg-white rounded-md shadow-xl" id="internCard">
            <header class="bg-red-400 rounded-t-md pt-3 pb-2 px-8 text-xl text-white font-bold">${this.name}</header>
            <header class="bg-red-400 pb-3 px-8 text-xl text-white font-bold"><span class="material-icons-outlined">school</span> Intern</header>
            <div class="p-6">
                <p>ID: ${this.id}</p>
                <p class="mt-3">Email: ${this.email}</p>
                <p class="mt-3">School: ${this.misc}</p>
            </div>
        </div>
`);


.then((answers) => {
    const htmlContent = generateHTML(answers);

    fs.writeFile('/lib/team.html', htmlContent, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
    );
});




    // inquirer
    //     .prompt([
    //         {
    //             message: "Let's build your team"
    //         },
    //         {
    //             type: 'input',
    //             name: 'manager',
    //             message: "What is your team manager's name?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'mgrID',
    //             message: "What is your team manager's ID?"
    //         },
    //         {
    //             type: 'email',
    //             name: 'mgrEmail',
    //             message: "What is your team manager's email?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'officeNum',
    //             message: "What is your team manager's office number?"
    //         },
    //         {
    //             type: 'list',
    //             message: 'What type of team member would you like to add?',
    //             name: 'teamMember',
    //             choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
    //         },
    //         {
    //             type: 'input',
    //             name: 'employee',
    //             message: "What is your employee's name?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'employID',
    //             message: "What is your employee's ID?"
    //         },
    //         {
    //             type: 'email',
    //             name: 'employEmail',
    //             message: "What is your employee's email?"
    //         },
    //         {
    //             type: 'list',
    //             message: 'What type of team member would you like to add?',
    //             name: 'teamMember',
    //             choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
    //         },
    //         {
    //             type: 'input',
    //             name: 'engineer',
    //             message: "What is your engineer's name?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'engineerID',
    //             message: "What is your engineer's ID?"
    //         },
    //         {
    //             type: 'email',
    //             name: 'engineerEmail',
    //             message: "What is your engineer's email?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'github',
    //             message: "What is your engineer's github name?"
    //         },
    //         {
    //             type: 'list',
    //             message: 'What type of team member would you like to add?',
    //             name: 'teamMember',
    //             choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"]
    //         },
    //         {
    //             type: 'input',
    //             name: 'intern',
    //             message: "What is your intern's name?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'internID',
    //             message: "What is your intern's ID?"
    //         },
    //         {
    //             type: 'email',
    //             name: 'internEmail',
    //             message: "What is your intern's email?"
    //         },
    //         {
    //             type: 'input',
    //             name: 'school',
    //             message: "What is your intern's school name?"
    //         },
    //         {
    //             type: 'list',
    //             message: 'What type of team member would you like to add?',
    //             name: 'teamMember',
    //             choices: ["Employee", "Engineer", "Intern", "I don't want to add anymore team members"],
    //         },
    //     ])
    //     .then((answers) => {
    //         const htmlContent = generateHTML(answers);
            
    //         const profile = document.querySelector('#teamMembers');
    //         profile.innerHTML = ""
    //         if ()

    //         fs.writeFile('./dist/team.html', htmlContent, (err) =>
    //             err ? console.log(err) : console.log('Successfully created index.html!')
    //         );
    //     });


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