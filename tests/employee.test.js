const Employee = require('../lib/employee');

describe("employee tests", () => {
    test("check name", () => {
      const employee = new Employee('Emily', 23, 'email@email.com')
      expect(employee.getName()).toBe('Emily')  
    })
}) 