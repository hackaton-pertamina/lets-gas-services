const { firebase } = require('../config/firebase'); 

const auth = (req, res, next) => {
  const user = firebase.auth().currentUser;
  if (user !== null) {
    req.user = user;
    next();
  } else {
    res.status(403).json({
      error: {
        messages: 'Not allowed',
      },
    })
  };
};

module.exports = auth;
