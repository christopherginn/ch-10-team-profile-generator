const Engineer = require('../lib/Engineer')

describe("Engineer", ()=> {
    describe("Init", ()=> {
        it("should set GitHub username via construct arg", ()=> {
            const github = "christopherginn"
            const engineer = new Engineer("name", "id", "email", github)
            expect (engineer.github).toBe(github)
        })
    })
    describe("Get methods", ()=> {
        it("should get office number via getGithub", ()=> {
            const github = "christopherginn"
            const engineer = new Engineer("name", "id", "email", github)
            const engGithub = engineer.getGithub()

            expect(engGithub).toBe(github)
        })

        it("should get role via getRole", ()=> {
            const engineer = new Engineer()
            const engRole = engineer.getRole()

            expect(engRole).toBe("Engineer")
        })
    })
})