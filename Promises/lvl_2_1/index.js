function randomNumber() {
  return new Promise((resolve, reject) => {
    let number = Math.floor(Math.random() * 10) + 1;
    number >= 6 ? resolve(number) : reject(number);
  });
}

randomNumber()
  .then((result) => {
    console.log(`resolved:${result}`);
  })
  .catch((error) => {
    console.log(`rejected:${error}`);
  });
