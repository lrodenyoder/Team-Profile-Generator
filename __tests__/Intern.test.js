const Intern = require("../lib/Intern.js");

test("create intern object", () => {
  const intern = new Intern("Dave", "0", "dave@gmail.com", "school");

  expect(intern.name).toBe("Dave");
  expect(intern.id).toEqual(expect.any(Number));
  expect(intern.email).toBe("dave@gmail.com");

  expect(intern.school).toBe("school");
});

test("get intern role", () => {
  const intern = new Intern("Dave", "0", "dave@gmail.com", "school");

  expect(intern.getRole()).toBe("Intern");
});

test("get intern screen name", () => {
  const intern = new Intern("Dave", "0", "dave@gmail.com", "school");

  expect(intern.getSchool()).toEqual(
    expect.stringContaining(intern.school.toString())
  );
});