const Intern = require('../lib/Intern.js');

test ('creates new intern', () => {
    const intern = new Intern('Jordan Johnston', '35', '1086jjohnston@gmail.com', 'Lasell University');
    expect(intern.name).toBe('Jordan Johnston');
    expect(intern.id).toBe('35');
    expect(intern.email).toBe('1086jjohnston@gmail.com');
    expect(intern.school).toBe('Lasell University');
});

test('checks intern school', () => {
    const intern = new Intern('Jordan Johnston', '35', '1086jjohnston@gmail.com', 'Lasell University');
    expect(intern.getSchool()).toEqual(expect.stringContaining('Lasell University'));
});

test('checks intern role', () => {
    const intern = new Intern('Jordan Johnston', '35', '1086jjohnston@gmail.com', 'Lasell University');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'));
});