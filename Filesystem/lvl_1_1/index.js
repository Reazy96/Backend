const fs = require("fs");

const newText = `ich bin ein webdeveloper`;

// greift auf die txt. Datei zu und nach dem Komma definieren wir unser Kontent.
fs.writeFile("./blog1.txt", newText, (err) => {
  // wenn der schriebvorgang schief geht gib mir ein error
  if (err) console.log(err);
  //   ansonsten gib mir ein feedback es es geklappt hat
  else console.log("done writing file");
});
// greift auf die Datei zu, falls nicht vorhanden - wird sie erstellt. nach dem Komma den Content.
fs.writeFile("./blog2.txt", "beliebiger Text", (err) => {
  // wenn der schriebvorgang schief geht gib mir ein error
  if (err) console.log(err);
  //   ansonsten gib mir ein feedback es es geklappt hat
  else console.log("done writing file2");
});

const ordnerName = "./assets";

// Überprüfen, ob der Ordner existiert
if (fs.existsSync(ordnerName)) {
  // Und wenn der Ordner existiert, lösche ihn
  fs.rmdir(ordnerName, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder deleted");
    }
  });
} else {
  console.log("folder not found");
}
// Erstelle einen neuen Ordner
fs.mkdirSync(ordnerName);
console.log("Neuer Ordner erstellt.");

const deleteData = "./delete.txt";

// Überprüfen, ob die Datei existiert
if (fs.existsSync(deleteData)) {
  // Und wenn die Datei existiert, lösche sie
  fs.unlink(deleteData, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data deleted");
    }
  });
} else {
  console.log("data not found");
}

// greift auf die Datei zu, falls nicht vorhanden - wird sie erstellt. nach dem Komma den Content.
fs.writeFile("./delete.txt", "", (err) => {
  // wenn der schriebvorgang schief geht gib mir ein error
  if (err) console.log(err);
  //   ansonsten gib mir ein feedback es es geklappt hat
  else console.log("done create data");
});

// greift auf die Datei zu, falls nicht vorhanden - wird sie erstellt. nach dem Komma den Content.
fs.writeFile("./Hello.txt", "hello how r u ?", (err) => {
  // wenn der schriebvorgang schief geht gib mir ein error
  if (err) console.log(err);
  //   ansonsten gib mir ein feedback es es geklappt hat
  else console.log("done create data");
});

// dateinamen umbenennen: 1.alter name 2.neuer name
fs.rename("Hello.txt", "HelloWorld.txt", (err) => {
  if (err) {
    console.log("rename error", err);
  } else {
    console.log("rename successful");
  }
});
