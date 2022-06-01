const printDate = function () {
  let today = new Date();
  let date =
    today.getDate() +
    " " +
    new Date().toLocaleString("en-us", {
      month: "short",
      year: "numeric",
    });
  return console.log("Current Date: ", date);
};

const printMonth = function () {
  let month = new Date().toLocaleString("en-us", {
    month: "short",
    year: "numeric",
  });
  return console.log("Current Month: ", month);
};

const getBatchInfo = function () {
  return console.log(
    "Radon, W3D3, the topic for today is Nodejs module system"
  );
};

module.exports.printDate = printDate;
module.exports.getBatchInfo = getBatchInfo;
module.exports.printMonth = printMonth;
