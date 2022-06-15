const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// create user
const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  res.send({ msg: savedData });
};

// login of user with JWT creation
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  // JWT creation
  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "radon",
      organisation: "FunctionUp",
    },
    "functionup-radon" //secret key
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, token: token });
};

// get user details
const getUserData = async function (req, res) {
  let user = req.user;
  res.send({ status: true, data: user });
};

// update user details
const updateUser = async function (req, res) {
  let userData = req.body;
  let userId = req.user._id;

  let updatedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    userData,
    { new: true }
  );
  res.send({ data: updatedUser });
};

// create a post
const postMessage = async function async(req, res) {
  let message = req.body.message;
  let updatedPosts = req.user.posts;
  //add the message to user's posts
  updatedPosts.push(message);
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: req.user._id },
    { posts: updatedPosts },
    { new: true }
  );

  //return the updated user document
  return res.send({ status: true, data: updatedUser });
};

// delete user with flag value
const deleteUser = async function (req, res) {
  let userId = req.user._id;
  let deletedUser = await userModel.findOneAndUpdate(
    { _id: userId },
    { isDeleted: true },
    { new: true }
  );
  res.send({ data: deletedUser });
};

module.exports = {
  createUser,
  getUserData,
  updateUser,
  loginUser,
  deleteUser,
  postMessage,
};
