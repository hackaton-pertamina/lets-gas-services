const { firebase } = require('../config/firebase');

const signUp = (req, res) => {
  const { email, password, password_conf } = req.body;

  if (password !== password_conf) {
    return res.status(422).json({
      error: {
        message: 'Password confirmation mismatch'
      },
    });
  }
  
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(result => res.status(201).json({
      message: 'successfully created new user !',
      user: result,
    }))
    
    .catch(error => res.status(403).json(error));
};

module.exports = signUp;