const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const { managerQuestions, internQuestions } = require('./lib/Questions')

// console.log(Manager)
// console.log(managerQuestions)
// console.log(internQuestions)



inquirer.prompt(managerQuestions).then(({ name, id, email, officeNumber, moreTeam }) => {
    const manager = new Manager(name, id, email, officeNumber)
    if (moreTeam === 'intern') {
        inquirer.prompt(internQuestions).then(({ name, id, email, school, moreTeam }) => {
            const intern = new Intern(name, id, email, school);
            console.log(intern);
        })
    };
    if (moreTeam === 'engineer') {
        engineerQuestion()
    }
    console.log(manager)
    console.log(manager.getRole())
    console.log(moreTeam)
})