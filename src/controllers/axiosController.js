let axios = require("axios");

let getStates = async function (req, res) {
  try {
    let options = {
      method: "get",
      url: "https://cdn-api.co-vin.in/api/v2/admin/location/states",
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getDistricts = async function (req, res) {
  try {
    let id = req.params.stateId;
    let options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`,
    };
    let result = await axios(options);
    console.log(result);
    let data = result.data;
    res.status(200).send({ msg: data, status: true });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByPin = async function (req, res) {
  try {
    let pin = req.query.pincode;
    let date = req.query.date;
    console.log(`query params are: ${pin} ${date}`);
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`,
    };
    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getOtp = async function (req, res) {
  try {
    let blahhh = req.body;

    console.log(`body is : ${blahhh} `);
    let options = {
      method: "post",
      url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
      data: blahhh,
    };

    let result = await axios(options);
    console.log(result.data);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let getByDistrict = async function (req, res) {
  try {
    let district = req.query.district_id;
    let date = req.query.date;
    var options = {
      method: "get",
      url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`,
    };
    let result = await axios(options);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

const getWhether = async function (req, res) {
  try {
    let whetherSorting = [
      "Bengaluru",
      "Mumbai",
      "Delhi",
      "Kolkata",
      "Chennai",
      "London",
      "Moscow",
    ];
    let appId = req.query.appId;
    let result = [];
    for (let i = 0; i < whetherSorting.length; i++) {
      let options = {
        method: "get",
        url: `http://api.openweathermap.org/data/2.5/weather?q=${whetherSorting[i]}&appid=${appId}`,
      };
      let output = await axios(options);
      let temp = {
        name: whetherSorting[i],
        temp: output.data.main.temp,
      };
      result.push(temp);
    }
    result.sort((a, b) => a.temp - b.temp);
    res.status(200).send({ msg: result });
  } catch (err) {
    console.log(err);
    res.status(500).send({ msg: err.message });
  }
};

let createMeme = async function (req, res) {
  try {
    let template_id = req.query.template_id;
    let text0 = req.query.text0;
    let text1 = req.query.text1;
    let username = req.query.username;
    let password = req.query.password;
    console.log(req.query);
    let options = {
      method: "post",
      url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`,
      data: req.query,
    };
    let result = await axios(options);
    res.status(200).send({ msg: result.data });
  } catch (err) {
    res.status(500).send({ msg: err.message });
  }
};

module.exports.getStates = getStates;
module.exports.getDistricts = getDistricts;
module.exports.getByPin = getByPin;
module.exports.getOtp = getOtp;
module.exports.getWhether = getWhether;
module.exports.getByDistrict = getByDistrict;
module.exports.createMeme = createMeme;
