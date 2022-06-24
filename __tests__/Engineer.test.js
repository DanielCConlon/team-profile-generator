const Engineer = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('testName', '3', 'test@test.com', 'testAccount');

    // parent constructor variables
    expect(engineer.name).toBe('testName');
    expect(engineer.id).toBe('3');
    expect(engineer.email).toBe('test@test.com');
    
    // Engineer specific variable
    expect(engineer.github).toBe('testAccount');
});

test('gets engineers github', () => {
    const engineer = new Engineer('testName', '3', 'test@test.com', 'testAccount');

    expect(engineer.getGithub()).toBe('Github: https://github.com/testAccount')
});

test('gets engineer role', () => {
    const engineer = new Engineer('testName', '3', 'test@test.com', 'testAccount');

    expect(engineer.getRole()).toBe('Engineer');
});