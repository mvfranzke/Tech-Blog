//

//function with req, req and another one called next
//next allows us to trigger and run the next function, which will be the next req and res right after it
const withAuth = (req, res, next) => {
  //if there's no session active, you'll be redirected to login first, otherwise if there's a user id you can move on
  if (!req.session.userId) {
    res.redirect("/auth"); // ????????????????????????/
  } else {
    next();
  }
};

module.exports = withAuth;
