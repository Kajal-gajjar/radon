const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const userVerification = async function (req, res, next) {
  let token = req.headers["x-Auth-token"] || req.headers["x-auth-token"];
  if (!token)
    return res
      .status(404)
      .send({ status: false, msg: "token must be present" });

  try {
    let decodedToken = jwt.verify(token, "functionup-radon");

    let userId = req.params.userId;
    let userLoggedIn = decodedToken.userId;

    // user validation
    let user = await userModel.findById(userId);
    if (!user) {
      return res
        .status(404)
        .send({ status: false, msg: "No such user exists" });
    }

    // token validation
    if (userLoggedIn != userId)
      return res.status(403).send({
        status: false,
        msg: "You are not authorized to perform this task",
      });

    req.user = user;
  } catch (err) {
    return res.status(401).send({ status: false, msg: "token is invalid" });
  }

  next();
};

module.exports.userVerification = userVerification;
