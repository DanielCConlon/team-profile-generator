const Intern = require('../lib/Manager');

test('create Intern object', () => {
    const intern = new Intern('testName', '3', 'test@test.com', '1');
    
    // parent constructor variables
    expect(intern.name).toBe('testName');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('test@test.com');

// Manager specific variable
    expect(intern.officeNumber).toBe('1');
});

test('gets Managers role', () => {
    const intern = new Intern('testName', '3', 'test@test.com', '1');

    expect(intern.getRole()).toBe('Manager');
});