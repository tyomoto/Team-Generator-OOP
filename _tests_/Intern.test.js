const Intern = require("../lib/intern");

// testing toBe for school
test("Can set an interns school.", () => {
    const school = "U of T"
    const internNew = new Intern("Tyler", 3, "tyler@email.com", school);
    expect(internNew.school).toBe(school);
});

// test get function for school
test("Can get an interns school.", () => {
    const school = "U of T"
    const internNew = new Intern("Tyler", 3, "tyler@email.com", school);
    expect(internNew.getSchool()).toBe(school);
});

// Testing getRole
test("getRole will return the object and all values", () => {
    const testValue = "Intern";
    const internNew = new Intern("Tyler", 3, "tyler@email.com", "U of T");
    expect(internNew.getRole()).toBe(testValue);
}) 