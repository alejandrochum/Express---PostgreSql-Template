const { Campus, Student } = require('../models');

const seedDB = async () => {
	const dummy_campus = await Campus.create({
		name: "Hunter College",
		description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lectus magna fringilla urna porttitor. A condimentum vitae sapien pellentesque habitant morbi tristique. Amet porttitor eget dolor morbi. Fames ac turpis egestas sed tempus. Venenatis cras sed felis eget velit aliquet sagittis. In mollis nunc sed id semper. Donec et odio pellentesque diam volutpat. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Montes nascetur ridiculus mus mauris vitae ultricies leo integer malesuada. Diam sollicitudin tempor id eu nisl nunc. Lobortis scelerisque fermentum dui faucibus in ornare. Arcu non odio euismod lacinia at quis risus sed vulputate. Sed libero enim sed faucibus. Aliquet enim tortor at auctor urna nunc. Semper quis lectus nulla at volutpat diam ut venenatis. Duis ultricies lacus sed turpis tincidunt id aliquet. Ultrices tincidunt arcu non sodales neque sodales ut. Volutpat consequat mauris nunc congue. Pellentesque habitant morbi tristique senectus.",
		address: "695 Park Ave, New York, NY 10065"
	});
	const dummy_campus2 = await Campus.create({
		name: "Harvard",
		description: "This is a school in MA.",
		address: "Harvard University, Massachusetts Hall, Cambridge, MA 02138"
	});

	const dummy_student = await Student.create({
		firstname: "Joe",
		lastname: "Shmo",
		email: "joe.shmo@email.com",
		gpa: 2
	});

	await dummy_student.setCampus(dummy_campus);

}

module.exports = seedDB;