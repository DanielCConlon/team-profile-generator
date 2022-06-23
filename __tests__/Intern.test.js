const Intern = require('../lib/Intern');

test('create Intern object', () => {
    const intern = new Intern('testName', '2University');

    expect(intern.name).toBe('testName');
    expect(intern.id).toBe('');
    expect(intern.email).toBe('');
    expect(intern.school).toBe('2University');
});

test('gets intern school value', () => {
    const intern = new Intern('testName', '2University');

    expect(intern.school).toBe('2University');
});