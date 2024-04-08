function multiNumber(number) {
  return new Promise((resolve, reject) => {
    if (typeof number !== "number") {
      reject("have to be an number");
    } else {
      resolve(number * number);
    }
  });
}

function finalNum(number) {
  multiNumber(number)
    .then((result) => {
      console.log(result);
      return multiNumber(result);
    })
    .then((result) => {
      console.log(result);
      console.log(multiNumber(result));
    })
    .catch((err) => {
      console.log(err);
    });
}

finalNum(5);
