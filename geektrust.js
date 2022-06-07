const fs = require("fs");

// const filename = process.argv[2]

fs.readFile("sample_input/input1.txt", "utf8", (err, data) => {
  if (err) throw err;
  let inputLines = data.toString().split("\r\n");
  console.log(inputLines)
});

// Add your code here to process input commands
// let output = ""
// inputLines.forEach(function (elem) {
//   // console.log(elem.split(" "));
//   if(elem.includes("")){
      
//   }
// });