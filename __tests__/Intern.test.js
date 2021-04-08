const Intern = require ('../lib/Intern');

const intern = new Intern('Banner, Bruce', 1);
    console.log(intern);
test('creates a random intern object', () => {
    expect(intern.name).toBe(intern.name, 'Banner, Bruce');
    expect(intern.id).toEqual(expect.any(Number));;
    expect(intern.email).toBe(intern.email, '@');  
    expect(intern.role).toBe(intern.role, 'intern');
    expect(intern.school).toBe(intern.school, 'school');
    expect(intern.getSchool).toBe(intern.getSchool, 'getSchool');
    

  });
