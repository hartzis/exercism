const getNumbers = function() {
  return `${Math.floor(Math.random() * 1000) + 1000}`.slice(1,4);
}
const chars = [..."abcdefghijklmnopqrstuvwxyz".toUpperCase()];
const getLetters = function() {
  const firstIdx = Math.floor(getNumbers()%25);
  const secondIdx = Math.floor(getNumbers()%25);
  return `${chars[firstIdx]}${chars[secondIdx]}`;
}

const getName = (function() {
  let names = {};
  return ()=>{
    let newName = `${getLetters()}${getNumbers()}`;
    if (names[newName]) {
      return getName();
    }
    names[newName] = true;
    return newName;
  }
})();

// psuedo functional composition
const Robot = function() {
  this.name = getName();
  return {
    name: this.name,
    reset() {
      this.name = getName();
    },
  };
}

// class based
// class Robot {
//   constructor() {
//     this.name = getName();
//   }
//   reset() {
//     this.name = getName();
//   }
// }

module.exports = Robot;
