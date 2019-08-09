const express = require('express');
const router = express.Router();

// middlewares
const auth = require('../middlewares/auth');

// functions
const helloWorld = require('../functions/helloWorld');
const signIn = require('../functions/signIn');
const signOut = require('../functions/signOut');
const signUp = require('../functions/signUp');
const notFound = require('../functions/notFound');

// -- protected routes
router.get('/hello-world', auth, helloWorld);
router.get('/sign-out', auth, signOut);

// -- public routes
router.post('/sign-in', signIn);
router.post('/sign-up', signUp);

// handle not found
router.get('/*', notFound);

module.exports = router;