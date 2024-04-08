const fs = require("fs");

const data = "ordner/newText.txt";


const ordnerName = "ordner";

fs.mkdirSync(ordnerName);
console.log("Neuer Ordner erstellt.");

if (fs.existsSync(data)) {
  // greift auf die txt. Datei zu und nach dem Komma definieren wir unser Kontent.
  fs.appendFile(data, "blabla ", (err) => {
    // wenn der schriebvorgang schief geht gib mir ein error
    if (err) console.log(err);
    //   ansonsten gib mir ein feedback es es geklappt hat
    else console.log("done writing file");
  });
} else {
  fs.writeFile(data, "", (err) => {
    // wenn der schriebvorgang schief geht, gib mir ein error
    if (err) console.log(err);
    //   ansonsten gib mir ein feedback es es geklappt hat
    else console.log("done create data");
  });
}
