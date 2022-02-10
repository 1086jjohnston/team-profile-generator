const Engineer = require('../lib/Engineer.js')

test('creates new engineer', () => {
    const engineer = new Engineer ('Jordan Johnston', '35', '1086jjohnston@gmail.com', '1086jjohnston')
    
    expect(engineer.name).toBe('Jordan Johnston');
    expect(engineer.id).toBe('35');
    expect(engineer.email).toBe('1086jjohnston@gmail.com');
    expect(engineer.github).toBe('1086jjohnston');
});

test ('checks github username', () => {
    const engineer = new Engineer ('Jordan Johnston', '35', '1086jjohnston@gmail.com', '1086jjohnston')

    expect(engineer.getGithub()).toEqual(expect.stringContaining('1086jjohnston'));
});

test('checks role', () => {
    const engineer = new Engineer ('Jordan Johnston', '35', '1086jjohnston@gmail.com', '1086jjohnston')

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'));
});