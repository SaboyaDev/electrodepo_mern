import bcrypt from 'bcryptjs';
let salt = bcrypt.genSaltSync(10);

const users = [
	{
		name: 'Admin User',
		email: 'admin@gmail.com',
		password: bcrypt.hashSync('123456', salt),
		isAdmin: true,
	},
	{
		name: 'Jose Saboya',
		email: 'joseluissaboya@gmail.com',
		password: bcrypt.hashSync('123456', salt),
	},
	{
		name: 'Brenda Hernadez',
		email: 'b_hernandez1995@gmail.com',
		password: bcrypt.hashSync('123456', salt),
	},
];

export default users;
