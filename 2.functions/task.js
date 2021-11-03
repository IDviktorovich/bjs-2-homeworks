// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = sum / arr.length;

  return { min: min, max: max, avg: +avg.toFixed(2) };
}

getArrayParams([1, 2, 3, -100, 10]);

// Задание 2
function worker(arr) {
  let sum;
  sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}


function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let sumArray = [];
  for (let i = 0; i < arrOfArr.length; i++) { 
    sumArray.push(func(arrOfArr[i]));
    if (sumArray[i] > max) {
      max = sumArray[i];
    }
  }
  
  return max;
}

let result = makeWork([[1,2,30],[4,40,6],[5,-10,150]], worker);
console.log(result);

// Задание 3
function worker2(arr) {
  let diff
  max = -Infinity;
  min = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  diff = max - min;
    

  return diff;
}

console.log(worker2([1,8,10]));

arrOfArr = [[-10, -20, -40], [10, 20, 30]];
makeWork(arrOfArr, worker2);