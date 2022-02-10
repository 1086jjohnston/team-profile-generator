const Manager = require('../lib/Manager.js');

test('creates new manager', () => {
    const manager = new Manager('Jordan Johnston', '35', '1086jjohnston@gmail.com', '1134');
    
    expect(manager.name).toBe('Jordan Johnston');
    expect(manager.id).toBe('35');
    expect(manager.email).toBe('1086jjohnston@gmail.com');
    expect(manager.office).toBe('1134');
});

test('checks manager role', () => {
    const manager = new Manager('Jordan Johnston', '35', '1086jjohnston@gmail.com', '1134');

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
});