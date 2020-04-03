function FindAllNonRepeatingCharacters(str) {
  var result = '';
  for (ch of str) {
    if (str.indexOf(ch) == str.lastIndexOf(ch)) {
      result += ch;
    }
  }
  console.log(result);
}
module.exports = {
  FindAllNonRepeatingCharacters: FindAllNonRepeatingCharacters,
};
