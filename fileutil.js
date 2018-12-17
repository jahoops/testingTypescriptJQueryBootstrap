var fs = require("fs");
var path = "c:\\Temp\\Test.txt";

fs.open(path, "w+", function(error, fd) {
  if (error) {
    console.error("open error:  " + error.message);
  } else {
    console.log("Successfully opened " + path);
  }
});