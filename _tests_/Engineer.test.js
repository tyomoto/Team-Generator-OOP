
const Engineer = require("../lib/engineer");

// testing toBe for github
test("Can set an engineers github.", () => {
    const github = "tylerhub"
    const engineerNew = new Engineer("Tyler", 1, "tyler@email.com", github);
    expect(engineerNew.github).toBe(github);
});

// test get function for github
test("Can get an engineers github.", () => {
    const github = "tylerhub"
    const engineerNew = new Engineer("Tyler", 1, "tyler@email.com", github);
    expect(engineerNew.getGithub()).toBe(github);
});

// Testing getRole
test("getRole will return the object and all values", () => {
    const testValue = "Engineer";
    const engineerNew = new Engineer("Tyler", 1, "tyler@email.com", "tylerhub");
    expect(engineerNew.getRole()).toBe(testValue);
})