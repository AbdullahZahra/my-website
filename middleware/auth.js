module.exports = (req, res, next) => {
  // If the user's session is authenticated, proceed to the route
  if (req.session && req.session.isAuthenticated) {
    return next();
  }
  // Otherwise, kick them back to the login page
  res.redirect("/login");
};
