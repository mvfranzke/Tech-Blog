
const withAuth = (req, res, next) => {
  // Check if there is an active session (user is logged in)
  if (!req.session.userId) {
    // If there is no active session, redirect the user to the login page ("/auth" in this case)
    res.redirect("/auth");
  } else {
    // If there is an active session, proceed to the next middleware or route handler
    next();
  }
};

//export withAuth to be used in other file
module.exports = withAuth;