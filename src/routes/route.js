const express = require("express");
const router = express.Router();
const axiosController = require("../controllers/axiosController");

router.get("/test-me", function (req, res) {
  res.send("My first ever api!");
});

router.get("/cowin/states", axiosController.getStates);
router.get("/cowin/districtsInState/:stateId", axiosController.getDistricts);
router.get("/cowin/getByPin", axiosController.getByPin);
router.get("/whether", axiosController.getWhether);

router.post("/cowin/getOtp", axiosController.getOtp);
router.post("/cowin/district", axiosController.getByDistrict);
router.post("/createMeme", axiosController.createMeme);

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

module.exports = router;
