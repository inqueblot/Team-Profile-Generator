const Employee = require('./Employee')

class Engineer extends Employee {
    constructor(name, id, email, githubUser) {
        super(name, id, email);
        this.githubUser = githubUser;
    };

    getGithubUser = () => this.githubUser;
    getRole = () => "Engineer";
}
module.exports = Engineer;