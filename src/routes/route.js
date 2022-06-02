const express = require("express");
const logger = require("../logger/logger");
const helper = require("../util/helper");
const validator = require("../validator/formatter");
const chunk = require("chunk");
const lodash = require("lodash");

const router = express.Router();

router.get("/test-me", function (req, res) {
  logger.welcome();
  helper.printDate();
  helper.printMonth();
  helper.getBatchInfo();
  validator.trim();
  validator.changetoLowerCase();
  validator.changeToUpperCase();
  res.send("Assignment- Node Modules");
});

router.get("/hello", function (req, res) {
  //- Create an array of strings containing the names all the months of a year and split the array into 4 equally sized sub-arrays using the chunk function. Print these sub-arrays

  let month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let result = chunk(month, 4);
  console.log("The sub-array of Months: ", result);

  //- Create an array containing the first 10 odd numbers. Using the tail function, return the last 9 elements of it and print them on console.
  let oddNumbers = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
  let tailNumbers = lodash.tail(oddNumbers);
  console.log("Array of Odd numbers using tail: ", tailNumbers);

  //- Create 5 arrays of numbers containing a few duplicate values. Using the function union create a merged array with only unique values and print them
  let arr1 = [1, 2];
  let arr2 = [2, 3, 4];
  let arr3 = [4, 5, 6];
  let arr4 = [5, 6, 7, 8];
  let arr5 = [7, 8, 9, 10];

  let finalArray = lodash.union(arr1, arr2, arr3, arr4, arr5);
  console.log("Final array after union operation: ", finalArray);

  //- Use the function fromPairs to create an object containing key value pairs. For example [“horror”,”The Shining"],[“drama”,”Titanic"],[“thriller”,”Shutter Island"],[“fantasy”,”Pans Labyrinth"]
  let movies = [
    ["Horror", "The Shining"],
    ["Drama", "Titanic"],
    ["Thriller", "Shutter Island"],
    ["Fantasy", "Pans Labyrinth"],
  ];
  let finalObj = lodash.fromPairs(movies);
  console.log("Object of Movie array", finalObj);
});

module.exports = router;
// adding this comment for no reason
