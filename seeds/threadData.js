const { Thread } = require('../models');

const threadData = [
	{
		id: 1,
		title: 'JavaScript',
		text: 'Tell us what you like/dislike about JavaScript',
		user_id: 1,
		created_at: '2023-03-12 02:11:56',
		updated_at: '2023-03-12 02:11:56',
	},
	{
		id: 2,
		title: 'HTML',
		text: 'Tell us what you like/dislike about HTML',
		user_id: 2,
		created_at: '2023-03-12 02:11:56',
		updated_at: '2023-03-12 02:11:56',
	},
	{
		id: 3,
		title: 'CSS',
		text: 'Tell us what you like/dislike about CSS',
		user_id: 3,
		created_at: '2023-03-12 02:11:56',
		updated_at: '2023-03-12 02:11:56',
	},
];

const seedThreads = () => Thread.bulkCreate(threadData);

module.exports = seedThreads;
