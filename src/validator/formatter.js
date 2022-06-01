const trim = function () {
  let str = " functionUp  ";
  return console.log("Trim String:" + str.trim());
};

const changetoLowerCase = function () {
  let str = "HeLlO";
  return console.log("Lower case String: " + str.toLowerCase());
};

const changeToUpperCase = function () {
  let str = "eVerYoNe";
  return console.log("Upper case String: " + str.toUpperCase());
};

module.exports.trim = trim;
module.exports.changetoLowerCase = changetoLowerCase;
module.exports.changeToUpperCase = changeToUpperCase;
