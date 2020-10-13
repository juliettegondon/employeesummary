const Employee = require("./Employee");
// Intern Class extended from Employee
class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole () {
        return "Intern";
    }
}
//exports
module.exports = Intern;