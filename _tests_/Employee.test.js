const Employee = require("../lib/employee");

// Testing class constructor and "this"
test("Can create an employee object.", () => {
    const employeeNew = new Employee();
    expect(typeof(employeeNew)).toBe("object");
}
);

test("Can set an employees name", () => {
    const name = "Tyler";
    const employeeNew = new Employee(name);
    expect(employeeNew.name).toBe(name);
})
test("Can set an employees id", () => {
    const id = 33;
    const employeeNew = new Employee("Tyler", id);
    expect(employeeNew.id).toBe(id);
})
test("Can set an employees email", () => {
    const email = "tyler@email.com";
    const employeeNew = new Employee("Tyler", 33, email);
    expect(employeeNew.email).toBe(email);
})

// testing getRole()
test("Testing getRole will return object and its values", () =>{
    const testValue = "Employee";
    const employeeNew = new Employee("Tyler", 33, "tyler@email.com");
    expect(employeeNew.getRole()).toBe(testValue);
})

test("Testing getName", () => {
    const name = "Tyler";
    const employeeNew = new Employee(name);
    expect(employeeNew.getName()).toBe(name);
})
test("Testing getId", () => {
    const id = 33;
    const employeeNew = new Employee("Tyler", id);
    expect(employeeNew.getId()).toBe(id);
})
test("Testing getEmail", () => {
    const email= "tyler@email.com";
    const employeeNew = new Employee("Tyler", 33, email);
    expect(employeeNew.getEmail()).toBe(email);
})
