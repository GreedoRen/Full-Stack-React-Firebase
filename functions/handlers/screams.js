const { db } = require('../util/admin');

exports.getAllScreams = (req, res) => {
	db
		.collection('screams')
		.orderBy('createAt', 'desc')
		.get()
		.then((data) => {
			let screams = [];
			data.forEach((doc) => {
				screams.push({
					screamId: doc.id,
					body: doc.data().body,
					userHandle: doc.data().userHandle,
					createAt: doc.data().createAt
				});
			});
			return res.json(screams);
		})
		.catch((err) => {
			res.status(500).json({ error: err.code });
			console.error(err);
		});
};

exports.postOneScream = (req, res) => {
	if (req.body.body.trim() === '') {
		return res.status(400).json({ body: 'Body must not be empty' });
	}

	const newScream = {
		body: req.body.body,
		userHandle: req.user.handle,
		createAt: new Date().toISOString()
	};

	db
		.collection('screams')
		.add(newScream)
		.then((doc) => {
			res.json({ message: `document ${doc.id} create successufully` });
		})
		.catch((err) => {
			res.status(500).json({ error: 'something wrong' });
			console.error(err);
		});
};
