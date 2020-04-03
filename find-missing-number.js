function FindMissingNumber(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr.indexOf(i + 1) == -1) {
      result = i + 1;
    }
  }
  console.log(result);
}

module.exports = {
  FindMissingNumber: FindMissingNumber,
};
