const Employee = require("./Employee");

// Engineer Class extended from Employee
class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole () {
        return "Engineer";
    }
}
//exports
module.exports = Engineer;