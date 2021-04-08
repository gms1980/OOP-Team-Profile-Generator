class Engineer {
	constructor(name, id, email, role, github) {
		this.name = name;
		this.id = id;
		this.email = email;
        this.role = role;
        this.github = github;
    
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

    getgithub() {
        return this.github;
    }
}
module.exports = Engineer;