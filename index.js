const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');
const Employee = require('./lib/Employee')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')
const Manager = require('./lib/Manager')

let managerQuestions = [
    {
        name: 'name',
        message: 'Please enter your name.'
    },
    {
        name: 'id',
        message: 'Please enter your Employee ID'
    },
    {
        name: 'email',
        message: 'Please enter your email address.'
    },
    {
        name: 'officeNumber',
        message: 'Please enter your office number.'
    },
    {
        type: 'expand',
        name: 'moreTeam',
        message: `Would you like to add an [i]ntern, [e]ngineer or [f]inish building your team?`,
        choices: [
            {
                key: 'e',
                name: 'engineer',
                value: 'engineer'
            },
            {
                key: 'i',
                name: 'intern',
                value: 'intern'
            },
            {
                key: 'f',
                name: 'no more roles to add',
                value: 'finish'
            }
        ]
    }
]

inquirer.prompt(managerQuestions).then(({ name, id, email, officeNumber }) => {
    const manager = new Manager(name, id, email, officeNumber)
    console.log(manager)
    console.log(manager.getRole())
})