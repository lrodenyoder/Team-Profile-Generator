const Employee = require("../lib/Employee.js");

test("creates employee object", () => {
  const employee = new Employee("Dave");

  expect(employee.name).toBe("Dave");
});
