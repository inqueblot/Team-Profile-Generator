class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email
    };
    getName = () => this.name;
    getId = () => this.id;
    getEmail = () => this.email;
    getRole = () => "Employee";
}
module.exports = Employee;


// const bill = new Employee('bill', 2, 'test@test.com')
// console.log(bill)
// console.log(bill.getId())
// console.log(bill.getName())
// console.log(bill.getRole())
