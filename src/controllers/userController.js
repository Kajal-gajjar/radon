const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

// create user
const createUser = async function (req, res) {
  let data = req.body;
  try {
    let savedData = await userModel.create(data);
    return res.status(201).send({ msg: savedData });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// login of user with JWT creation
const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  try {
    let user = await userModel.findOne({
      emailId: userName,
      password: password,
    });
    if (!user)
      return res.status(400).send({
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
    // res.setHeader("x-auth-token", token);
    return res.status(200).send({ status: true, token: token });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// get user details
const getUserData = async function (req, res) {
  let user = req.user;
  try {
    return res.status(200).send({ status: true, data: user });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// update user details
const updateUser = async function (req, res) {
  let userData = req.body;
  let userId = req.user._id;

  try {
    if (req.user.isDeleted == false) {
      let updatedUser = await userModel.findOneAndUpdate(
        { _id: userId },
        userData,
        { new: true }
      );
      return res.status(200).send({ data: updatedUser });
    } else return res.status(400).send("Your acount is not active");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// create a post
const postMessage = async function async(req, res) {
  let message = req.body.message;
  let updatedPosts = req.user.posts;
  // add the message to user's posts
  updatedPosts.push(message);
  try {
    if (req.user.isDeleted == false) {
      let updatedUser = await userModel.findOneAndUpdate(
        { _id: req.user._id },
        { posts: updatedPosts },
        { new: true }
      );
      //return the updated user document
      return res.status(201).send({ status: true, data: updatedUser });
    } else return res.status(400).send("Your acount is not active");
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

// delete user with flag value
const deleteUser = async function (req, res) {
  let userId = req.user._id;
  try {
    let deletedUser = await userModel.findOneAndUpdate(
      { _id: userId },
      { isDeleted: true },
      { new: true }
    );
    return res.send({ data: deletedUser });
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createUser,
  getUserData,
  updateUser,
  loginUser,
  deleteUser,
  postMessage,
};
