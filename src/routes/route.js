const express = require("express");

const router = express.Router();

let movies = [
  "Rang de basanti",
  "The shining",
  "Lord of the rings",
  "Batman begins",
];

router.get("/movies", function (req, res) {
  res.send(movies);
});

router.get("/movies/:indexNumber", function (req, res) {
  let index = req.params.indexNumber;
  if (movies[index] === undefined) res.send("Request you to use valid index!!");
  res.send(movies[index]);
});

let films = [
  {
    id: 1,
    name: "The Shining",
  },
  {
    id: 2,
    name: "Incendies",
  },
  {
    id: 3,
    name: "Rang de Basanti",
  },
  {
    id: 4,
    name: "Finding Nemo",
  },
];

router.get("/films", function (req, res) {
  res.send(films);
});

router.get("/films/:filmId", function (req, res) {
  let filmId = req.params.filmId;
  let output = films.find((x) => x.id == filmId);
  if (output === undefined) res.send("No movie exists with this id");
  res.send(output);
});

router.get("/sol1", function (req, res) {
  let arr = [1, 2, 4, 5, 6, 7];
  let n = arr[arr.length - 1];
  let sumOfArray = arr.reduce(function (add, curr) {
    add = add + curr;
    return add;
  }, 0);
  let sumOfSequence = (n * (n + 1)) / 2;
  let missingNumber = sumOfSequence - sumOfArray;
  res.send("The missing number is: " + missingNumber);
});

router.get("/sol2", function (req, res) {
  let arr = [33, 34, 35, 37, 38];
  let last = arr[arr.length - 1];
  let first = arr[0];
  let n = arr.length + 1; // last - first + 1;
  let sumOfArray = arr.reduce(function (add, curr) {
    add += curr;
    return add;
  }, 0);
  let sumOfSequence = (n * (first + last)) / 2; //33-38
  let missingNumber = sumOfSequence - sumOfArray;
  res.send("The missing number is: " + missingNumber);
});

module.exports = router;
// adding this comment for no reason
