function replaceSpecialChars(stringToReplace) {
  return stringToReplace.replace(/[^\w\s]/gi, ' ');
}

function breakCasing(phraseToBreak) {
  return phraseToBreak.replace(/([a-z])([A-Z])/g, '$1 $2');
}

function getAcronym(words) {
  return words.map(w=>w[0]).filter(w=>!!w).reduce((acr, w)=>{
    acr=acr+w.toUpperCase();
    return acr;
  }, '');
}

function parse(phrase) {
  const cleanedPhrase = replaceSpecialChars(phrase);
  const finalPhrase = breakCasing(cleanedPhrase);
  const splitPhrase = finalPhrase.split(' ');
  return getAcronym(splitPhrase);
}

module.exports = {
  parse,
}
