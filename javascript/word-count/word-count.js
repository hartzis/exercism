

var words = function(args) {
  var words = args.split(/\s/);
  var wordCounts = {};
  words.forEach(function(word, idx) {
    if(wordCounts[word]) {
      wordCounts[word]++;
    } else {
      wordCounts[word] = 1;
    }
  });
  return wordCounts;
}

module.exports = words;