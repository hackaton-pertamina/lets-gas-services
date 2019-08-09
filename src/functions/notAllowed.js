const notAllowed = (req, res) => {
  res.status(403).json({
    error: {
      message: 'Not allowed !'
    }
  });
};

module.exports = notAllowed;
