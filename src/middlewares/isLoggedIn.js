const isLoggedIn = (req, res, next) => {
  const isLoggedIn = true;
  if (isLoggedIn) {
    next();
  }
  res.send({ error: "Not Authenticated" });
};

module.exports = isLoggedIn;
