const isFreeAppUser = function (req, res, next) {
  const { isfreeappuser } = req.headers;
  if (isfreeappuser === undefined || isfreeappuser === "")
    res.send("The request is missing a mandatory header");
  else {
    req.isFreeAppUser = isfreeappuser;
    next();
  }
};

module.exports.isFreeAppUser = isFreeAppUser;
