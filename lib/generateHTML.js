function mgrProfile(manager) {
    return manager;
}

// Create function that returns card based on user choice
function employeeChoice(teamMember) {
    if (teamMember === "Employee") 
        return employee;    
    
    if (teamMember === "Employee") 
        return employee;
        
    if (teamMember === "Engineer") 
        return engineer;

    if (teamMember === "Intern") 
    return intern;

    if (teamMember === "I don't want to add anymore team members") {
        console.log('Thank you. You can now see your team.');   
        return ""
    }
}




function generateHTML(answers) {  
    let team = document.querySelector('#teamMembers');
    team.innerHTML = ""
    let card = `
    <div class="p-24 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8" id="teamMembers">
        ${mgrProfile(manager)}
        ${employeeChoice(answers.teamMember)}
        </div>
    
    `
    team.innerHTML += card
    }
    

module.exports = generateHTML();

