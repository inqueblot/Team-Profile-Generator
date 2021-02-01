const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const { managerQuestArr, internQuestArr, engineerQuestArr } = require('./lib/Questions')

// console.log(Manager)
// console.log(managerQuestions)
// console.log(internQuestions)

const team = [];

inquirer.prompt(managerQuestArr).then(({ name, id, email, officeNumber, moreTeam }) => {
    const manager = new Manager(name, id, email, officeNumber)
    team.push(manager);
    if (moreTeam === 'intern') {
        internQuestions();
    };
    if (moreTeam === 'engineer') {
        engineerQuestions()
    }
    // console.log(manager)
    // console.log(manager.getRole())
    // console.log(moreTeam)
});

const internQuestions = function () {
    inquirer.prompt(internQuestArr).then(({ name, id, email, school, moreTeam }) => {
        const intern = new Intern(name, id, email, school);
        team.push(intern);
        console.log(team);
        if (moreTeam === 'intern') {
            internQuestions();
        };
        if (moreTeam === 'engineer') {
            engineerQuestions()
        }
    })
};

const engineerQuestions = function () {
    inquirer.prompt(engineerQuestArr).then(({ name, id, email, gitHubUser, moreTeam }) => {
        const engineer = new Engineer(name, id, email, gitHubUser);
        console.log(engineer);
        if (moreTeam === 'intern') {
            internQuestions();
        };
        if (moreTeam === 'engineer') {
            engineerQuestions()
        }
    })
};
