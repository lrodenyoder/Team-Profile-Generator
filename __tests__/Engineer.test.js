const Engineer = require('../lib/Engineer.js');

test('create engineer object', () => {
    const engineer = new Engineer("Dave", "0", "dave@gmail.com", "24", "gituser");
    
    expect(engineer.name).toBe("Dave");
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toBe("dave@gmail.com");
});