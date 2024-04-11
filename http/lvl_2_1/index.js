const http = require("http");
const fs = require("fs");
const { readFile } = require("./readFile.js");

const errorPage = fs.readFileSync("./public/pages/error.html");
const PORT = 3330;

const myServer = http.createServer((request, response) => {
  console.log("new request:", request.method, request.url);

  if (request.method !== "GET") {
    response.end();
    return;
  }

  const filePath =
    request.url === "/" || request.url === "/home" ? "./public/pages/home.html" : `./public${request.url}`;
  //   request.url=

  readFile(filePath)
    .then((dataBuffer) => {
      response.write(dataBuffer);
      response.end();
    })

    .catch((err) => {
      const FILE_NOT_FOUND = "ENOENT";
      console.error(err);
      if (err.code === FILE_NOT_FOUND) {
        response.writeHead(404);
      } else {
        response.writeHead(500);
        console.log(err);
      }
      response.write(errorPage);
      response.end();
    });
});

myServer.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));
