const functions = require('firebase-functions');

const app = require('express')();
const { getAllScreams, postOneScream } = require('./handlers/screams');
const { signUp, login, uploadImage } = require('./handlers/users');
const FBAuth = require('./util/fbAuth');

// Scream routes
app.get('/screams', getAllScreams);
app.post('/scream', FBAuth, postOneScream);
// Users routes
app.post('/signup', signUp);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);

exports.api = functions.https.onRequest(app);
