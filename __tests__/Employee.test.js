const Employee = require('../lib/Employee');

test('creates an new employee object', () => {
    const employee = new Employee('testName', '1', 'test@test.com');

    expect(employee.name).toBe('testName');
    expect(employee.id).toBe('1');
    expect(employee.email).toBe('test@test.com');
});

test("gets employee's name", () => {
    const employee = new Employee('testName', '1', 'test@test.com');

    expect(employee.getName()).toEqual(expect.stringContaining('testName'));
});

test("gets employee's id", () => {
    const employee = new Employee('testName', '1', 'test@test.com');

    expect(employee.getId()).toBe('ID: 1');
})

test("get employee's role", () => {
    const employee = new Employee('testName','1', 'test@test.com');


    expect(employee.getRole()).toBe('Employee');
});