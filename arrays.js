"use strict";


// 1. printIndices const message = `Hello ${name}!`;
function printIndices(items) {
  items.forEach(function(item,i) {
    console.log(item,i);
  });
}


// 2. everyOtherItem
function everyOtherItem(items) {
  result=[]
  // items.forEach(function(item,i) {
  //   if (i%2===0)
  //       result.join(item);
  // });
  // return result

  for (i=0; i<items.length; i=i+2){
        result.join(items[i]);

 }
 return result

}


// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  items.sort((a, b) => a - b);
  return items.slice(0,n);

}

let nums = [1, 30, 4, 21, 100000];
// [ 1, 4, 21, 30, 100000 ]
console.log(smallestNItems(nums,3));
