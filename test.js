const Student = require('./Builder/student');

const student =
	new Student()
			.withName('Richard')
			.withLastName('Siwady')
			.withAddress('Villanueva, Cortes')
			.withAge(20)
			.withDegree(true)
			.withCountry('Honduras');

console.log(student);
