const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('testName', '3', 'test@test.com', '2University');
    
    // parent constructor variables
    expect(intern.name).toBe('testName');
    expect(intern.id).toBe('3');
    expect(intern.email).toBe('test@test.com');

// intern specific variable
    expect(intern.school).toBe('2University');
});

test('gets intern school value', () => {
    const intern = new Intern('testName', '3', 'test@test.com', '2University');

    expect(intern.getSchool()).toBe('2University');
});

test('gets interns value', () => {
    const intern = new Intern('testName', '3', 'test@test.com', '2University');

    expect(intern.getRole()).toBe('Intern');
});