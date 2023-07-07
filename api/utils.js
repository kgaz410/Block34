function requireUser(req, res, next) {
  if(req.headers.Authorization) {
    req.user = req.body.user
  }
  if(!req.user){
    res.send("Not authorized").status(401)
  }
  next()
}

module.exports = {
  requireUser
}