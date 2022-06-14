const Manager = require("../lib/manager");

// testing toBe for office number
test("Can set a managers office number.", () => {
    const officeNumber = 22;
    const managerNew = new Manager("Tyler", 4, "tyler@email.com", officeNumber);
    expect(managerNew.officeNumber).toBe(officeNumber);
});

// test get function for office number
test("Can get an Managers office number.", () => {
    const officeNumber = 22;
    const managerNew = new Manager("Tyler", 4, "tyler@email.com", officeNumber);
    expect(managerNew.getOfficeNumber()).toBe(officeNumber);
});

// Testing getRole
test("getRole will return the object and all values", () => {
    const testValue = "Manager";
    const managerNew = new Manager("Tyler", 4, "tyler@email.com", 22);
    expect(managerNew.getRole()).toBe(testValue);
})

