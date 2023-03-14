const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedThreads = require('./threadData');
const seedUsers = require('./userData');

const seedAll = async () => {
	await sequelize.sync({ force: true });

	await seedUsers();

	await seedThreads();

	await seedComments();

	process.exit(0);
};

seedAll();
