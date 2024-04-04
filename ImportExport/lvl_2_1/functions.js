function filterPopulation1(arr) {
  return arr.filter((item) => item.population > 100000);
}

function filterPopulation2(arr) {
  return arr.filter((item) => item.population < 100000);
}

export { filterPopulation1, filterPopulation2};
