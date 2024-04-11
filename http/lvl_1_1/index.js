const http = require("http");

const fs = require("fs");
// const PORT = 3333;
// const serverReazy = http.createServer((request, response) => {

//   console.log("new request:", request.method, request.url);

//   

//   function readFile(path) {
//     return new Promise((resolve, reject) => {
//       fs.readFile(path, (err, dataBuffer) => {
//         if (err) return reject(err);
//         resolve(dataBuffer);
//       });
//     });
//   }

//   if (request.method === "GET" && (request.url === "/" || request.url === "/home")) {
//     readFile("./pages/home.html")
//       .then((dataBuffer) => {
//         response.write(dataBuffer);
//         response.end();
//       })
//       .catch((err) => {
//         console.log(err);
//         response.end("Internal Server Error!");
//       });
//   } else if (request.method === "GET" && request.url === "/about") {
//     readFile("./pages/about.html")
//       .then((dataBuffer) => {
//         response.write(dataBuffer);
//         response.end();
//       })
//       .catch((err) => {
//         console.log(err);
//         response.end("Internal Server Error!");
//       });
//   } else if (request.method === "GET" && request.url === "/contact") {
//     readFile("./pages/contact.html")
//       .then((dataBuffer) => {
//         response.write(dataBuffer);
//         response.end();
//       })
//       .catch((err) => {
//         console.log(err);
//         response.end("Internal Server Error!");
//       });
//   } else if (request.method === "GET" && request.url === "/faq") {
//     readFile("./pages/faq.html")
//       .then((dataBuffer) => {
//         response.write(dataBuffer);
//         response.end();
//       })
//       .catch((err) => {
//         console.log(err);
//         response.end("Internal Server Error!");
//       });
//   } else {
//     readFile("./pages/error.html")
//       .then((dataBuffer) => {
//         response.write(dataBuffer);
//         response.end();
//       })
//       .catch((err) => {
//         console.log(err);
//         response.end("Internal Server Error!");
//       });
//   }
// }); // server hat einen requestListener (auch Request-Handler genannt)

// serverReazy.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));

const server = http.createServer((request, response) => {
  console.log("new request:", request.method, request.url);

  function readFile(path) {
    return new Promise((resolve, reject) => {
      fs.readFile(path, (err, dataBuffer) => {
        if (err) return reject(err);
        resolve(dataBuffer);
      });
    });
  }
  const filePath = request.url === "/" || request.url === "/home" ? "home.html" : `${request.url.slice(1)}.html`;

  if (request.url !== "/favicon.ico") {
    readFile(`./pages/${filePath}`)
      .then((dataBuffer) => {
        response.write(dataBuffer);
        response.end();
      })

      .catch((err) => {
        console.log(err);
        response.end('<a href="/home">Home</a>');
      });
  }
});

const PORT = 3333;
server.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));
