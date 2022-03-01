const Employee = require("../lib/Employee.js");

test("creates employee object", () => {
  const employee = new Employee("Dave", "0", 'dave@gmail.com');

    expect(employee.name).toBe("Dave");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe("dave@gmail.com");
});

test('gets employee name', () => {
  const employee = new Employee("Dave", "0", "dave@gmail.com");

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name.toString()));
})
