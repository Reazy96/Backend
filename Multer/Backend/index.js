import express from "express";
import multer from "multer";
import cors from "cors";
import { readBlog, writeBlog } from "./filesystem.js";

const app = express();

app.use(cors());

app.use((req, _, next) => {
  console.log("new request:", req.method, req.url);
  next();
});

app.use(express.static("uploads"));
app.use(express.json());

// app.get("/", (req, res) => res.send("it works"));

const upload = multer({ dest: "./uploads" });

app.get("/api/v1/blogs", (_, res) => {
  readBlog()
    .then((blog) => res.status(200).json(blog))
    .catch((err) => res.status(500).json({ err, message: "Could not read all Blogs" }));
});

app.get("/api/v1/blogs/:id", (req, res) => {
  const blogsId = req.params.id; // in der route gibt es einen route-parameter .../:id
  readBlog()
    .then((blog) => blog.find((t) => t.id.toString() === blog))
    .then((blog) => res.status(200).json(blog || {}))
    .catch((err) => res.status(500).json({ err, message: "Could not read blog" }));
});

app.post("/api/files/uploads", upload.single("Blog"), (req, res) => {
  console.log(req.body);
  console.log(req.file);

  res.json({ Beitragsbild: req.file.filename });
});

app.post("/api/v1/blogs", (req, res) => {
  readBlog()
    .then((blogs) => {
      let lastBlog;
      if (blogs.length === 0) {
        lastBlog = 0;
      } else {
        lastBlog = blogs[blogs.length - 1].id;
      }

      const newId = lastBlog + 1;

      const newBlog = {
        id: newId,
        Titel: req.body.Titel,
        Beitragsbild: req.body.Beitragsbild,
        Text: req.body.Text,
      };
      return [...blogs, newBlog];
    })
    .then((blogWithNewID) => writeBlog(blogWithNewID))
    .then((blogWithNewID) => res.status(200).json(blogWithNewID))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not read all Blogs" });
    });
});
// id,Titel,Beitragsbild,Text

app.patch("/api/v1/blogs/:id", (req, res) => {
  const blogIdToUpdate = req.params.id;
  const updateInfo = req.body;
  readBlog()
    .then((blog) =>
      blog.map((currentBlog) => {
        if (currentBlog.id.toString() === blogIdToUpdate) {
          // update transaction
          return {
            ...currentBlog,
            ...updateInfo,
          };
        } else {
          return currentBlog;
        }
      })
    )
    .then((blog) => writeBlog(blog))
    .then((blog) => res.status(200).json(blog))
    .catch((err) => res.status(500).json({ err, message: "Could not remove blog" }));
});

const PORT = 1122;
app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));
