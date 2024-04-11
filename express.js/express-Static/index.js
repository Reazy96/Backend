import express from "express";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

// erstelle ein server
const app = express();

const PORT = 3300;

app.use((req, res, next) => {
  console.log("new request", req.method, req.url);
  next();
});
// next() bedeutet dass wenn die funktion ausgeführt wurde dann geh zum nächsten.

app.use(express.static("public"));

// wenn ich eine (GET "/")-Abfrage bekomme, gib mir die Response und dann führe "res.sendFile" aus.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/pages/home.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/pages/about.html");
});

app.get("/gallery", (req, res) => {
  res.sendFile(__dirname + "/public/pages/gallery.html");
});

app.get("/work", (req, res) => {
  res.sendFile(__dirname + "/public/pages/work.html");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
