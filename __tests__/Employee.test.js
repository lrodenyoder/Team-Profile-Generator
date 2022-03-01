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
});

test('gets employee id', () => {
    const employee = new Employee("Dave", "0", "dave@gmail.com");

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee("Dave", "0", "dave@gmail");

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('get employee role', () => {
    const employee = new Employee("Dave", "0", "dave");

    expect(employee.getRole()).toBe('Employee');
});