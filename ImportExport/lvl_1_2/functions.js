let func1 = (a) => a.slice(0, 1);

let func2 = (a) => a.slice(0, a.length - 1);

let func3 = (a) => a.slice(a.length - 1, a.length);

let func4 = (a) => a.slice(1, a.length);

let func5 = (arr, word) => {
  if (arr.includes(word)) {
    arr.splice(arr.indexOf(word), 1);
  }
  return arr;
};

let func6 = (arr) => {
  return arr.filter((item, index) => arr.indexOf(item) === index);
  //   return [...new Set(arr)]; -> kürzer
};

let func7 = (arr) => {
  return arr.reduce((acc, curr) => acc + curr);
};

let func8 = (number1, number2) => {
  return Math.floor(Math.random() * number2) + number1;
};

function func9(word) {
  return word[0].toUpperCase() + word.slice(1);
}

let func10 = (word) => {
  return word.toUpperCase();
};

let func11 = (word, letter) => {
  return word.slice(-1).toLowerCase() === letter.toLowerCase();
};

export { func1, func2, func3, func4, func5, func6, func7, func8, func9, func10, func11 };
