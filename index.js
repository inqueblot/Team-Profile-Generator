const inquirer = require('inquirer');
const pageTemplate = require('./src/page-template');

let managerQuestions = [
    {
        name: 'name',
        message: 'Please enter your name.'
    },
    {
        name: 'empID',
        message: 'Please enter your Employee ID'
    },
    {
        name: 'emailAdd',
        message: 'Please enter your email address.'
    },
    {
        name: 'officeNum',
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

inquirer.prompt(managerQuestions).then((answers) => {
    console.log(answers)
})