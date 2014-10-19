module.exports = {
  compute: function(str1, str2) {
    var totalDiff = 0;
    for (var i = 0; i < str1.length; i++) {
      if (str1[i] !== str2[i])
        totalDiff++;
    };
    return totalDiff;
  }   
}