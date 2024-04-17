import fs from "fs";
import url from "url";
import path from "path";

const aktuellesVerzeichnis = path.dirname(url.fileURLToPath(import.meta.url));

// ! Funktion zum Lesen einer JSON-Datei

export function readJsonFile(path) {
  return new Promise((resolve, reject) => {
    // * Datei lesen
    fs.readFile(path, (err, dataBuffer) => {
      // - Errorhandling
      if (err) return reject(err);

      //   * Datenbuffer in JSON-String umwandeln
      const jsonString = dataBuffer.toString();

      //   * JSON-String zu einen JS-Objekt parsen
      const jsObj = JSON.parse(jsonString);

      //   *  return das Resolve-Promise mit dem JS-Objekt zum weiterarbeiten
      resolve(jsObj);
    });
  });
}
// ! Funktion zum Lesen der To-Do Daten

export function readToDos() {
  // * Aufruf der readJsonFile-Funktion mit dem Pfad zur To-Do Datei

  return readJsonFile(aktuellesVerzeichnis + "/data/todos.json");
}
// ! Funktion zum Schreiben einer JSON-Datei

export function writeJsonFile(path, jsObj) {
  return new Promise((resolve, reject) => {
    // * JS-Objekt in einen JSON-String und Formatierung für Datei
    const jsonString = JSON.stringify(jsObj, null, 2);

    // * Datei schreiben
    fs.writeFile(path, jsonString, (err) => {
      // - Errorhandling
      if (err) return reject(err);

      //   *  return das Resolve-Promise mit dem JS-Objekt zum weiterarbeiten
      resolve(jsObj);
    });
  });
}

// ! Funktion zum Schreiben der To-Do Daten

export function writeToDos(arr) {
  // * Aufruf der writeToDos-Funktion mit dem Pfad zur Datei und dem Array

  return writeJsonFile(aktuellesVerzeichnis + "/data/todos.json", arr);
}
