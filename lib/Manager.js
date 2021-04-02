// TODO: Write code to define and export the Employee class

class Manager {
	constructor(name, id, email) {
		this.name = name;
		this.id = id;
		this.email = email;
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
		return 'Employee';
	}

    getOfficeNumber() {
        return 'OfficeNumber';
    }
}
module.exports = Manager;