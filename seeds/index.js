const sequelize = require('../config/connection');
const seedComments = require('./commentData');
const seedThreads = require('./threadData');

const seedAll = async () => {
	await sequelize.sync({ force: true });

	await seedThreads();

	await seedComments();

	process.exit(0);
};

seedAll();
