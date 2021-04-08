
const Employee = require ('../lib/Employee');


const employee = new Employee('Stark, Tony', 1);
    console.log(employee);
test('creates a random employee object', () => {
    expect(employee.name).toBe(employee.name, 'Stark, Tony');
    expect(employee.id).toEqual(expect.any(Number));;
    expect(employee.email).toBe(employee.email, '@');  
    expect(employee.role).toBe(employee.role, 'Employee');
  });
