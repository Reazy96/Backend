function doubleNumber(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof number === "number" ? resolve(number * 2) : reject("input have to be a number");
    }, 5000);
  });
}

doubleNumber(10)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
