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

// Promise.all([randomTimeout(2000), randomTimeout(3000), randomTimeout(4000)])
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

array = [1, 23, 4, 5, 6, 7, 8, 8, 5, 5, 4, 3, 22];
let newArr = [];
for (let i = array.length - 1; i >= 0; i--) {
  newArr.push(array[i]);
}
console.log(newArr);
