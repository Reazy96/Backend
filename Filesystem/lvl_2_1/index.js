const data = require("./data.json");
const fs = require("fs");

//! Umwandeln der JSON-Daten in Textformat

// die umgewandelte Datei soll in eine Variable abgespeichert werden.
const textData = data
  // -   Regex-Code startet mit "/"
  // ? "\s" steht für alle Leerzeichen
  // ? "/g" steht dafür dass "\s" überall gesucht wird und schliesslich mit einem Leeren string ersetzt wird.
  // ? Umwandeln der JSON-Daten in das gewünschte Format
  // ? Umwandeln der JSON-Daten in Textformat und Speichern in der Variable textData

  // * \n\n steht für doppelten Zeilenumbruch ist aber kein Regex

  .map((item) => `${item.id} - ${item.title.replace(/\s/g, "")}\n${item.description}\n\n`)
  .join("");

// Schreiben der Textdaten in eine Datei
fs.writeFile("ausgabe.txt", textData, (err) => {
  if (err) {
    console.error("Fehler beim Schreiben der Datei:", err);
  } else {
    console.log("Textdatei erfolgreich erstellt.");
  }
  console.log(textData);
});
