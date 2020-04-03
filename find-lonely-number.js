function FindLonelyNumber(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    var num = arr[i];
    if (arr.indexOf(num) == arr.lastIndexOf(num)) {
      result = num;
    }
  }
  console.log(result);
}

module.exports = {
  FindLonelyNumber: FindLonelyNumber,
};
