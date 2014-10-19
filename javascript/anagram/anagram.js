function sortWord(word) {
  return word.toLowerCase().split('').sort().join();
}

function argsToArray(args) {
  if (args[0] instanceof Array) return args[0];
  
  var newSubjects = [];
  for (var prop in args) {
    if (args.hasOwnProperty(prop)) {
      newSubjects.push(args[prop]);
    }
  }
  return newSubjects;
}

function isAnagram(word) {
  var sortedWord = sortWord(word);

  return {
    matches: function matches(subjects) {
      var matches = [];
      
      argsToArray(arguments).forEach(function(subject) {
        if (sortWord(subject) == sortedWord && 
            subject.toLowerCase() !== word.toLowerCase()) {
          matches.push(subject);
        }
      });
      return matches;
    }
  }
}

module.exports = isAnagram;