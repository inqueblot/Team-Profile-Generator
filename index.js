const inquirer = require('inquirer');
const generateTeam = require('./src/page-template');
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')
const { managerQuestArr, internQuestArr, engineerQuestArr } = require('./lib/Questions')
const fs = require('fs')
const path = require('path')
const outputDir = path.resolve(__dirname, "dir")
const folderPath = path.join(outputDir, 'employee_roster.html')


// console.log(Manager)
// console.log(managerQuestions)
// console.log(internQuestions)

const team = [];

inquirer.prompt(managerQuestArr).then(({ name, id, email, officeNumber, moreTeam }) => {
    const manager = new Manager(name, id, email, officeNumber)
    team.push(manager);
    if (moreTeam === 'intern') {
        internQuestions();
    }
    else if (moreTeam === 'engineer') {
        engineerQuestions()
    }
    else {
        buildTeam()
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
        }
        else if (moreTeam === 'engineer') {
            engineerQuestions()
        }
        else {
            buildTeam();
        };
    })
};

const engineerQuestions = function () {
    inquirer.prompt(engineerQuestArr).then(({ name, id, email, gitHubUser, moreTeam }) => {
        const engineer = new Engineer(name, id, email, gitHubUser);

        team.push(engineer);
        if (moreTeam === 'intern') {
            internQuestions();
        }
        else if (moreTeam === 'engineer') {
            engineerQuestions()
        }
        else {
            buildTeam();
        };
    })
};

const buildTeam = function () {
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir)
    };
    fs.writeFileSync(folderPath, generateTeam(team), 'utf8')
}
