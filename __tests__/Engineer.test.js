const Engineer = require ('../lib/Engineer');

const engineer = new Engineer('Banner, Bruce', 1);
    console.log(engineer);
test('creates a random engineer object', () => {
    expect(engineer.name).toBe(engineer.name, 'Banner, Bruce');
    expect(engineer.id).toEqual(expect.any(Number));;
    expect(engineer.email).toBe(engineer.email, '@');  
    expect(engineer.role).toBe(engineer.role, 'Engineer');
    expect(engineer.github).toBe(engineer.github, 'username');

  });
