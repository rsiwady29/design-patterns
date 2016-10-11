const Student = require('./student');

const handle = (body) => {
	const student =
		new Student()
				.withName(body.name)
				.withLastName(body.lastName)
				.withAddress(body.address)
				.withAge(body.age)
				.withDegree(body.degree)
				.withCountry(body.country);
	// do something cool with the object we just built.
	return student;
};

module.exports = {
	handle: handle,
};
