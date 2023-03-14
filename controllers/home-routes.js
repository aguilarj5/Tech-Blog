const router = require('express').Router();
const { Thread, User, Comment } = require('../models');

// GET all threads for homepage
router.get('/', async (req, res) => {
	try {
		const dbThreadData = await Thread.findAll({
			include: User,
		});

		const threads = JSON.stringify(dbThreadData, null, 2);
			
		console.log(threads);

		res.render('homepage', {
			threads,
			loggedIn: req.session.loggedIn,
		});
	} catch (err) {
		console.log(err);
		res.status(500).json(err);
	}
});

// // GET one gallery
// router.get('/gallery/:id', async (req, res) => {
// 	try {
// 		const dbGalleryData = await Gallery.findByPk(req.params.id, {
// 			include: [
// 				{
// 					model: Painting,
// 					attributes: [
// 						'id',
// 						'title',
// 						'artist',
// 						'exhibition_date',
// 						'filename',
// 						'description',
// 					],
// 				},
// 			],
// 		});

// 		const gallery = dbGalleryData.get({ plain: true });
// 		res.render('gallery', { gallery, loggedIn: req.session.loggedIn });
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });

// // GET one painting
// router.get('/painting/:id', async (req, res) => {
// 	try {
// 		const dbPaintingData = await Painting.findByPk(req.params.id);

// 		const painting = dbPaintingData.get({ plain: true });
// 		res.render('painting', { painting, loggedIn: req.session.loggedIn });
// 	} catch (err) {
// 		console.log(err);
// 		res.status(500).json(err);
// 	}
// });

// Login route
router.get('/login', (req, res) => {
	if (req.session.loggedIn) {
		res.redirect('/');
		return;
	}
	res.render('login');
});

module.exports = router;
