const Manager = require('../lib/manager');

describe("Employee Tests", () => {
    test("Check role", () => {
        const manager = new Manager('Amelia', 1125, 'amelia@boss.com', '2022')
        expect(manager.getRole()).toBe('Manager')
    })
    test("Check office number", () => {
        const manager = new Manager('Amelia', 1125, 'amelia@boss.com', '2022')
        expect(manager.getOfficeNumber()).toBe('2022')
    })
})