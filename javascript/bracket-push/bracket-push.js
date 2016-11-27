
// [] {} ()

const OPEN_BRACKETS = {
  '{':'}',
  '[':']',
  '(':')',
};
const CLOSE_BRACKETS = Object.keys(OPEN_BRACKETS).reduce((acc, a)=>{
  let brack = OPEN_BRACKETS[a];
  acc[brack] = a;
  return acc;
}, {});
const IS_CLOSE_BRACKETS = Object.keys(CLOSE_BRACKETS);

function bracket(inputBracks) {
  let inputArray = [...inputBracks];
  // track order of brackets
  let trackingBrackets = [];
  for (let i = 0; i < inputArray.length; i++) {
    let letter = inputArray[i];
    let [isClose] = IS_CLOSE_BRACKETS.filter(a=>a===letter);
    // if close bracket
    if (isClose) {
      let openBrack = CLOSE_BRACKETS[letter];
      // last tracking bracket must be a matching open
      if (trackingBrackets[trackingBrackets.length - 1] === openBrack) {
        trackingBrackets.pop();
      } else {
        return false;
      }
    } else {
      // add open bracket to tracking brackets
      trackingBrackets.push(letter);
    }
  }
  return !trackingBrackets.length;
}

module.exports = bracket
