const Employee = require('../lib/Employee.js');

test('checks for new employee', () => {
    const employee = new Employee('Jordan Johnston', '35', '1086jjohnston@gmail.com');

    expect(employee.name).toBe('Jordan Johnston');
    expect(employee.id).toBe('35');
    expect(employee.email).toBe('1086jjohnston@gmail.com');
});

test('checks employees name', () => {
    const employee = new Employee('Jordan Johnston', '35', '1086jjohnston@gmail.com');

    expect(employee.getName()).toEqual(expect.stringContaining('Jordan Johnston'));
});

test('checks employees id', () => {
    const employee = new Employee('Jordan Johnston', '35', '1086jjohnston@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining('35'));
});

test('checks employees email', () => {
    const employee = new Employee('Jordan Johnston', '35', '1086jjohnston@gmail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('1086jjohnston@gmail.com'));
});

test('checks employees role', () => {
    const employee = new Employee('Jordan Johnston', '35', '1086jjohnston@gmail.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});