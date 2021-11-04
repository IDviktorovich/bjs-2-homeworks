function compareArrays(arr1, arr2) {
  let result;
  result = (arr1.length === arr2.length) && arr1.every((item, idx) => item === arr2[idx]); 
  
  return result; // boolean
}

let comparison = compareArrays([5,6,7], [5,6,7]);
console.log(comparison);

function advancedFilter(arr) {
  let resultArr;
  resultArr = arr.filter((item) => item > 0).filter((item) => item % 3 === 0).map((item) => item * 10);

  return resultArr; // array
}

console.log(advancedFilter([-1,-2]));
