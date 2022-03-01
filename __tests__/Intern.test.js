const Intern = require('../lib/Intern.js');

test('create intern object', () => {
    const intern = new Intern("Dave", "0", "dave@gmail.com", "24");

    expect(intern.name).toBe("Dave");
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toBe("dave@gmail.com");
});