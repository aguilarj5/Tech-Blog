const { User } = require('../models');

const userData = [
	{
		id: 1,
		username: '1',
		email: 'test1@test1.com',
		password: 123456,
	},
	{
		id: 2,
		username: '2',
		email: 'test2@test2.com',
		password: 123456,
	},
	{
		id: 3,
		username: '3',
		email: 'test3@test3.com',
		password: 123456,
	},
	{
		id: 4,
		username: '4',
		email: 'test4@test4.com',
		password: 123456,
	},
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
