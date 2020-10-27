"use strict";


// 1. countWords
function countWords(phrase) {
  let words=phrase.split(" ");
  let word_counts={};
// items.forEach(function(item,i)
  for (let word in words){
    if (word_counts.hasOwnProperty(word))
      word_counts[word] +=1;
    else
      word_counts[word] =1;
    
  }
  return word_counts.i

}


// 2. getMelonsAtPrice
function getMelonsAtPrice(price) {
  // Replace this with your code
}
console.log(countWords("attempt to access a property"));