const Employee = require("../lib/Employee.js");

test("creates employee object", () => {
  const employee = new Employee("Dave", "0", 'blank.email');

    expect(employee.name).toBe("Dave");
    expect(employee.id).toEqual(expect.any(Number));
});
