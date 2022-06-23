const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('testName', 'testAccount');

    expect(intern.name).toBe('testName');
    expect(intern.id).toBe('');
    expect(intern.email).toBe('');
    expect(engineer.github).toBe('testAccount');
});

test('gets engineers github', () => {
    const engineer = new Engineer('testName', 'testAccount');

    expect(engineer.getGithub()).toBe('https://github.com/testAccount')
});

test('gets engineer role', () => {
    const engineer = new Engineer('testName', 'testAccount');

    expect(engineer.getRole()).toBe('Engineer');
});