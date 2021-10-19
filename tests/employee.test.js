const Employee = require('../lib/employee');

describe("Employee Tests", () => {
    test("Check name", () => {
      const employee = new Employee('Emily', 23, 'email@email.com', 'Employee')
      expect(employee.getName()).toBe('Emily')   
    })
    test("Check ID", () => {
      const employee = new Employee('Emily', 23, 'email@email.com', 'Employee')
      expect(employee.getId()).toBe(23)  
    })
    test("Check email", () => {
      const employee = new Employee('Emily', 23, 'email@email.com', 'Employee')
      expect(employee.getEmail()).toBe('email@email.com')  
    })
    test("Check role", () => {
      const employee = new Employee('Emily', 23, 'email@email.com', 'Employee')
      expect(employee.getRole()).toBe('Employee')  
    })
}) 