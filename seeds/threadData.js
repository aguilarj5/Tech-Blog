const { Thread } = require('../models');

const threadData = [
	{
		id: 1,
		title: 'JavaScript',
		text: 'Tell us what you like/dislike about JavaScript',
		user_id: 1,
		comment_id: 1,
	},
];

const seedThreads = () => Thread.bulkCreate(threadData);

module.exports = seedThreads;
