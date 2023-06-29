const fs = require("fs");

const printDataFromFile = (err, data) => {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log(data);
  }
};

//async operation
fs.readFile("fileExample.txt", "utf-8", printDataFromFile);

//if do something expensive here
let count = 0;
for (let i = 0; i < 10000000000; i++) {
  count += i;
}
console.log(count); //first this count will be printed then the contents of the file will be dispalyed as reading from file is async
