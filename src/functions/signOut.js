const { firebase } = require('../config/firebase');

const signOut = (req, res) => {

  firebase.auth().signOut()
    .then(() => res.status(200).json({ message: 'Signed Out', }))
    .catch(error => res.status(403).json(error));
};

module.exports = signOut;