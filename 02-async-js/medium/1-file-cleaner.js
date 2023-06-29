const fs = require("fs");

const printDataFromFile = (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(data);
    fileCleanerFunction(data);
  }
};

const writeDataInFile = (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Given file has been re written");
};

const fileCleanerFunction = (data) => {
  const cleanData = data.replace(/\s+/g, " ").trim();
  console.log(`This is clean data - ${cleanData}`);

  //Replace data in file with cleanData
  fs.writeFile("fileExample.txt", cleanData, "utf-8", writeDataInFile);
};

//async operation
fs.readFile("fileExample.txt", "utf-8", printDataFromFile);
