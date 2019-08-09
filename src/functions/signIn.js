const { firebase } = require('../config/firebase');

const signIn = (req, res) => {
  const { email, password } = req.body;
  
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(result => res.status(200).json({ user: result.user }))
    .catch(error => res.status(403).json(error));
};

module.exports = signIn;