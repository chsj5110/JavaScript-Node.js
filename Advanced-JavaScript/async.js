const fs = require("fs/promises");

async function readFile() {
  let fileData;

  // fileData = fs.readFileSync("data.txt");
  // fileData = fs.readFile("data.txt", function(error, fileData){
  //  if(error){
  //   //...
  // }
  //   console.log("File parsing done!");
  //   console.log(fileData.toString());
  //    // start another async task that sends the data to a database
  // });

  try {   // 그냥 비동기(.then)에서는 try-catch 사용x
    fileData = await fs.readFile("data.txt"); // async / awit -> .then 안써도 비동기
  } catch {
    console.log(error);
  }
    // .then(function (fileData) {
    // promises -> .then()
    console.log("File parsing done!");
    console.log(fileData.toString());
    // return anotherAsyncOperation;
    // })
    // .then(function () {})
    // .catch(function (error) {   // 프로미스에서 오류 처리
    //   console.log(error);
    // });
  
  console.log("Hi there!"); // 비동기에서는 이 문장이 먼저 출력됨
}

readFile();
