const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Init", () => {
        it("should instantiate an employee", () => {
            const employee = new Employee()

            expect(typeof employee).toBe("object");
        })

        it("should set name via parameters passed into Employee", () => {
            const name = "Chris"
            const employee = new Employee(name)
            expect(employee.name).toBe(name)
        })

        it("should set ID via constructor args", () => {
            const id = 99
            const employee = new Employee("Name", id)
            expect(employee.id).toBe(id)
        })

        it("should set Email via constructor arg passed into Employee", () => {
            const email = "email@yahoo.com"
            const employee = new Employee("Name", "id", email)
            expect(employee.email).toBe(email)
        })
    })

    describe("Get methods", ()=>{
        it("should get name by getName", ()=> {
            const name = "Chris"
            const employee = new Employee(name)
            const employeeName = employee.getName()

            expect(employeeName).toBe(name);
        })

        it("should get ID by getId", ()=> {
            const id = 66
            const employee = new Employee("name", id)
            const employeeId = employee.getId()

            expect(employeeId).toBe(id);
        })

        it("should get email by getEmail", ()=> {
            const email = "email@yahoo.com"
            const employee = new Employee("name", "id", email)
            const employeeEmail = employee.getEmail()

            expect(employeeEmail).toBe(email);
        })

        it("should get role by getRole", ()=> {
            
            const employee = new Employee()
            const employeeRole = employee.getRole()

            expect(employeeRole).toBe("Employee");
        })
    })
})