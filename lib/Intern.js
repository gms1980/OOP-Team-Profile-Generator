class Intern {
	constructor(name, id, email, role, school) {
		this.name = name;
		this.id = id;
		this.email = email;
        this.role = role;
        this.school = school;    
	}

	getName() {
		return this.name;
	}

	getId() {
		return this.id;
	}

	getEmail() {
		return this.email;
	}

	getRole() {
		return this.role;
	}

    getSchool() {
        return this.school;
    }
}
module.exports = Intern;