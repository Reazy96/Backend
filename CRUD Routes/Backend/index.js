import express from "express";
import cors from "cors";
import { readToDos, writeToDos } from "./writeAndReadFile.js";

// * Middleware zum Protokollieren eingehender Anfragen

const app = express();

app.use(cors());
app.use((req, _, next) => {
  console.log("new request:", req.method, req.url);
  next();
});

// * Diese Middleware ermöglicht es der Anwendung, JSON-Anfrage-Body zu parsen und stellt die geparsten Daten in req.body bereit.
// * Wenn ein Client eine Anfrage an die Anwendung sendet und Daten im JSON-Format im Anfrage-Body enthält, wird diese Middleware automatisch aufgerufen.
// * Der geparste JSON-Inhalt steht dann im Objekt req.body zur Verfügung, das ein Teil der Anfrage (req) ist.
// * Dadurch kannst du bequem auf die Daten im Anfrage-Body zugreifen und sie in deiner Anwendungslogik verwenden.

app.use(express.json());

// ! Definition der GET-Routen:

// * Erstellt einen Endpunkt für alle GET-Abfragen
app.get("/api/v1/todos", (_, res) => {
  // * Wir lesen eine Datei ein
  readToDos()
    //   * übergeben die Datei an den Clienten
    .then((todos) => res.status(200).json(todos))

    // - Errorhandling
    .catch((err) => res.status(500).json({ err, message: "Could not read To-Do's" }));
});
// * Erstellt einen Endpunkt für eine bestimme Abfrage
app.get("/api/v1/todos/:id", (req, res) => {
  // * Extrahiert den Wert der ID aus der URL
  const toDoId = req.params.id;
  //   * Wir lesen die Datei ein
  readToDos()
    //   * Wir suchen die ID aus dem Array und wandeln diese in ein String um sie mit dem aus der URL zu vergleichen
    .then((todos) => {
      return todos.find((element) => element.id.toString() === toDoId);
    })
    // * übergeben die Datei an den Clienten
    .then((foundToDo) => res.status(200).json(foundToDo))
    .catch((err) => res.status(500).json({ err, message: "Could not read To-Dos's" }));
});

// ! Definition der POST-Route

// * Erstellt einen Endpukt für alle POST-Abfragen
app.post("/api/v1/todos", (req, res) => {
  readToDos()
    .then((todos) => {
      let lastTodo;
      // * Prüfen, ob bereits Todos vorhanden sind
      if (todos.length === 0) {
        // * Wenn keine Todos vorhanden sind, setzen wir lastTodo auf 0
        lastTodo = 0;
      } else {
        // * Wenn bereits Todos vorhanden sind, setzen wir lastTodo auf die ID des letzten Todos
        lastTodo = todos[todos.length - 1].id;
      }
      // * Generieren der neuen Todo-ID
      const newId = lastTodo + 1;

      // Erstellen des neuen Todo-Objekts mit der neuen ID
      const newTodo = {
        id: newId,
        title: req.body.title,
        status: req.body.status,
      };

      // * Hinzufügen des neuen Todos zum vorhandenen Array
      return [...todos, newTodo];
    })
    .then((todosWithNew) => writeToDos(todosWithNew))
    .then((todosWithNew) => res.status(200).json(todosWithNew))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not read all todos" });
    });
});

app.patch("/api/v1/todos/:id", (req, res) => {
  const idUpdate = req.params.id;
  const updateInfo = req.body;

  readToDos()
    .then((todos) =>
      todos.map((currentTodo) => {
        {
          if (currentTodo.id.toString() === idUpdate) {
            return { ...currentTodo, ...updateInfo };
          } else {
            return currentTodo;
          }
        }
      })
    )
    .then((todos) => writeToDos(todos))
    .then((todos) => res.status(200).json(todos))
    .catch((err) => res.status(500).json({ err, message: "Could not update" }));
});

app.delete("/api/v1/todos/:id", (req, res) => {
  const todoToDelete = req.params.id;

  readToDos()
    .then((todo) => todo.filter((item) => item.id.toString() !== todoToDelete))
    .then((todo) => writeToDos(todo))
    .then((todo) => res.status(200).json(todo))
    .catch((err) => res.status(500).json({ err, message: "Could not remove To-Do" }));
});

const PORT = 1234;
app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}`));
