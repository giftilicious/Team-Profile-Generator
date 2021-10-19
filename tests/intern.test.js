const Intern = require('../lib/intern');

describe("Employee Tests", () => {
    test("Check role", () => {
        const intern = new Intern('Romeo', 222, 'romeo@email.com', 'Stanford University')
        expect(intern.getRole()).toBe('Intern')
    })
    test("Check school", () => {
        const intern = new Intern('Romeo', 222, 'romeo@email.com', 'Stanford University')
        expect(intern.getSchool()).toBe('Stanford University')
    })
})