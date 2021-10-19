const Engineer = require('../lib/engineer');

describe("Employee Tests", () => {
    test("Check role", () => {
        const engineer = new Engineer('Kay', 511, 'kay@email.com', 'Coder123')
        expect(engineer.getRole()).toBe('Engineer')
    })
    test("Check github", () => {
        const engineer = new Engineer('Kay', 511, 'kay@email.com', 'Coder123')
        expect(engineer.getGithub()).toBe('Coder123')
    })
})