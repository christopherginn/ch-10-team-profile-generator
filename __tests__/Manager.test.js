const Manager = require('../lib/Manager')

describe("Manager", ()=> {
    describe("", ()=> {
        it("should set office # via construct arg", ()=> {
            const officeNum = 8
            const manager = new Manager("name", "id", "email", officeNum)
            expect (manager.officeNum).toBe(officeNum)
        })
    })
    describe("Get methods", ()=> {
        it("should get office number via getOffice", ()=> {
            const officeNum = 8
            const manager = new Manager("name", "id", "email", officeNum)
            const managerOffice = manager.getOffice()

            expect(managerOffice).toBe(officeNum)
        })

        it("should get role via getRole", ()=> {
            const manager = new Manager()
            const managerRole = manager.getRole()

            expect(managerRole).toBe("Manager")
        })
    })
})