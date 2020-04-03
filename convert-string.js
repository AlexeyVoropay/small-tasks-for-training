function ConvertString(str) {
  let result = '';
  let lastChar = str[0];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char == lastChar) {
      count++;
    } else {
      result += lastChar + count;
      count = 1;
      lastChar = char;
    }
    if (i == str.length - 1 && count > 0) {
      result += lastChar + count;
    }
  }
  console.log(result);
}
module.exports = {
  ConvertString: ConvertString,
};
