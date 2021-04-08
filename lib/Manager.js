// TODO: Write code to define and export the Employee class

class Manager {
	constructor(name, id, email, role, officeNumber) {
		this.name = name;
		this.id = id;
		this.email = email;
		this.role = role;
		this.officeNumber = officeNumber;
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

    getOfficeNumber() {
        return this.officeNumber;
    }
}
module.exports = Manager;