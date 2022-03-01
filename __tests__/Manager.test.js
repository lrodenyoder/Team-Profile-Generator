const Manager = require('../lib/Manager.js');

test('create manager object', () => {
    const manager = new Manager("Dave", "0", "dave@gmail.com", "24");

    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toBe("dave@gmail.com");

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('get manager role', () => {
    const manager = new Manager("Dave", "0", "dave@gmail.com", "24");

    expect(manager.getRole()).toBe('Manager');
})