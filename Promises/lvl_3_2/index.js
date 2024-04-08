function randomTimeout(wait) {
  return new Promise((resolve, reject) => {
    let randomNum = Math.floor(Math.random() * 1000 + 1);
    setTimeout(() => {
      if (typeof randomNum !== "number") {
        reject("have to be an number");
      } else {
        resolve(randomNum);
      }
    }, wait);
  });
}

// randomTimeout(2000)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

Promise.all([randomTimeout(2000), randomTimeout(3000), randomTimeout(4000)])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
