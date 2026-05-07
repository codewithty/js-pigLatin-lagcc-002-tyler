'use strict';

let pigLatin = function(word) {

  if (word.includes(" ")) {
    const words = word.split(" ");
    const translateWords = [];

    for (let i = 0; i < words.length; i++) {
      translateWords.push(pigLatin(words[i]));
    }
    return translateWords.join(" ");
  }

  const vowel = "aeiou";
  const firstLetter = word[0];

  if (vowel.includes(firstLetter)) {
    return word + "ay";
  }

  if (word.includes("qu")) {
    const quIndex = word.indexOf("qu") + 2;
    return word.slice(quIndex) + word.slice(0, quIndex) + "ay";
  }

  for (let i = 0; i < word.length; i++) {
    if (vowel.includes(word[i])) {
      return word.slice(i) + word.slice(0, i) + "ay";
    }
  }

};

module.exports = pigLatin;