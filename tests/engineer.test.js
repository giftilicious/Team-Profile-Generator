const Engineer = require('../lib/engineer');

describe("Employee Tests", () => {
    test("Check name", () => {
        const engineer = new Engineer('Kay', 511, 'kay@email.com', 'Engineer', 'Coder123')
        expect(engineer.getName()).toBe('Kay')
    })
    test("Check ID", () => {
        const engineer = new Engineer('Kay', 511, 'kay@email.com', 'Engineer', 'Coder123')
        expect(engineer.getId()).toBe(511)
    })
    test("Check email", () => {
        const engineer = new Engineer('Kay', 511, 'kay@email.com', 'Engineer', 'Coder123')
        expect(engineer.getEmail()).toBe('kay@email.com')
    })
    test("Check role", () => {
        const engineer = new Engineer('Kay', 511, 'kay@email.com', 'Engineer', 'Coder123')
        expect(engineer.getRole()).toBe('Engineer')
    })
    test("Check github", () => {
        const engineer = new Engineer('Kay', 511, 'kay@email.com', 'Engineer', 'Coder123')
        expect(engineer.getGithub()).toBe('Coder123')
    })
})