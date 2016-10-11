'use strict';

class student {
  withName(name) {
      this.name = name;
      return this;
  }
  withAge(age) {
    this.age = age;
    return this;
  }
  withLastName(lastName) {
    this.lastName = lastName;
    return this;
  }
  withAddress(address) {
    this.address = address;
    return this;
  }
	withDegree(degree) {
		this.degree = degree;
		return this;
	}
	withCountry(country) {
		this.country = country;
		return this;
	}
}

module.exports = student;
