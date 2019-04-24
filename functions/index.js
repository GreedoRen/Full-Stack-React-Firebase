const functions = require('firebase-functions');
const admin = require('firebase-admin');

const app = require('express')();
admin.initializeApp();

const config = {
	apiKey: 'AIzaSyDEzCv6P0U9818rTERR0R2As8pd4euVgA4',
	authDomain: 'socialapp-9ecf5.firebaseapp.com',
	databaseURL: 'https://socialapp-9ecf5.firebaseio.com',
	projectId: 'socialapp-9ecf5',
	storageBucket: 'socialapp-9ecf5.appspot.com',
	messagingSenderId: '95830712758'
};

const firebase = require('firebase');
firebase.initializeApp(config);

const db = admin.firestore();

app.get('/screams', (req, res) => {
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
		.catch((err) => console.error(err));
});

app.post('/scream', (req, res) => {
	const newScream = {
		body: req.body.body,
		userHandle: req.body.userHandle,
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
});

// Sign up route
app.post('/signup', (req, res) => {
	const newUser = {
		email: req.body.email,
		password: req.body.password,
		confirmPassword: req.body.confirmPassword,
		handle: req.body.handle
	};

	// Todo validate date
	let token, userId;
	db
		.doc(`/users/${newUser.handle}`)
		.get()
		.then((doc) => {
			if (doc.exists) {
				return res.status(400).json({ handle: 'this handle is alredy taken' });
			} else {
				return firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password);
			}
		})
		.then((data) => {
			userId = data.user.uid;
			return data.user.getIdToken();
		})
		.then((idToken) => {
			token = idToken;
			const userCredentials = {
				handle: newUser.handle,
				email: newUser.email,
				createAt: new Date().toISOString(),
				userId
			};
			return db.doc(`/users/${newUser.handle}`).set(userCredentials);
		})
		.then(() => {
			return res.status(201).json({ token });
		})
		.catch((err) => {
			console.error(err);
			if (err.code === 'auth/email-already-in-use') {
				return res.status(400).json({ email: 'Email is alredy in use' });
			} else {
				return res.status(500).json({ error: err.code });
			}
		});
});

exports.api = functions.https.onRequest(app);
