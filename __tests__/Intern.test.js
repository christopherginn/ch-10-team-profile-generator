const Intern = require('../lib/Intern')

describe("Intern", ()=> {
    describe("Init", ()=> {
        it("should set school name via construct arg", ()=> {
            const school = "School"
            const intern = new Intern("name", "id", "email", school)
            expect (intern.school).toBe(school)
        })
    })
    describe("Get methods", ()=> {
        it("should get school name via getSchool", ()=> {
            const school = "School"
            const intern = new Intern("name", "id", "email", school)
            const internSchool = intern.getSchool()

            expect(internSchool).toBe(school)
        })

        it("should get role via getRole", ()=> {
            const intern = new Intern()
            const internRole = intern.getRole()

            expect(internRole).toBe("Intern")
        })
    })
})