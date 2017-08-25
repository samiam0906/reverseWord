function reverseWord(word) {
  var reverseArr = [];
  for (var i = 0; i < word.length; i++) {
    reverseArr.push(word[(word.length-1)-i]);
  }
  return reverseArr.join("");
}

reverseWord("Sam");
