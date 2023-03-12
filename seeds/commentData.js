const { Comment } = require('../models');

const commentData = [
	{
		id: 1,
		text: 'Tell us what you like/dislike about JavaScript',
		user_id: 1,
		thread_id: 1,
	},
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
