
const Manager = require ('../lib/manager');

const manager = new Manager('Fury, Nick', 1);
    console.log(manager);

test('creates a random manager object', () => {
    expect(manager.name).toBe(manager.name, 'Fury, Nick');
    expect(manager.id).toEqual(expect.any(Number));;
    expect(manager.email).toBe(manager.email, '@');  
    expect(manager.role).toBe(manager.role, 'Employee');
    expect(manager.officeNumber).toBe(manager.officeNumber, '#');
    
  });
