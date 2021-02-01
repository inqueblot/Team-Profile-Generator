managerQuestions = [
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
],

    internQuestions = [
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
            name: 'school',
            message: 'What school are you currently attending?'
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

engineerQuestions = [
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
        name: 'gitHubUser',
        message: 'Please enter your github username'
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

module.exports = {
    managerQuestions,
    internQuestions
};