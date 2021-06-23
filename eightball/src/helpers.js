function getRandom(array) {
  let random = array[Math.floor(Math.random() * array.length)];
  return random;
}

export default getRandom;
