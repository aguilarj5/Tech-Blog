const { Comment } = require('../models');

const commentData = [
	{
		id: 1,
		text: 'Arrow functions are fun!',
		user_id: 1,
		thread_id: 1,
		created_at: '2023-03-12 02:11:56',
		updated_at: '2023-03-12 02:11:56',
	},
	{
		id: 2,
		text: 'Arrow functions are fun!',
		user_id: 1,
		thread_id: 1,
		created_at: '2023-03-12 02:11:56',
		updated_at: '2023-03-12 02:11:56',
	},
	{
		id: 3,
		text: 'Arrow functions are fun!',
		user_id: 2,
		thread_id: 2,
		created_at: '2023-03-12 02:11:56',
		updated_at: '2023-03-12 02:11:56',
	},
	{
		id: 4,
		text: 'Arrow functions are fun!',
		user_id: 3,
		thread_id: 2,
		created_at: '2023-03-12 02:11:56',
		updated_at: '2023-03-12 02:11:56',
	},
	{
		id: 5,
		text: 'Arrow functions are fun!',
		user_id: 3,
		thread_id: 1,
		created_at: '2023-03-12 02:11:56',
		updated_at: '2023-03-12 02:11:56',
	},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
