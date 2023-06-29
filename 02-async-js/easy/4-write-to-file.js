const fs = require("fs");

const data = "Replace the data in file with this data";

const writeDataInFile = (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Given file has been re written");
};

//async operation
fs.writeFile("fileExample.txt", data, "utf-8", writeDataInFile);
