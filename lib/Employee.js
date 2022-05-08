class Employee {
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
        this.getName = () => {
            if (this.name) {
                console.log(`The employee name is ${this.name}`)
            }
        };
        this.getId = () => {

        };
        this.getEmail = () => {

        };
        this.getRole = () => {

        }
    }
}

module.exports = Employee;

