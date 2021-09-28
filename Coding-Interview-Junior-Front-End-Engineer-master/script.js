let arrayOfIntegers = [1, 2, 3, 4]; //Defined the array
let targetValue = 1; //Defined the target Value
var totalPair = []; // array to store pair results

  for (i = 0; i < arrayOfIntegers.length; i++) {
      var seletedArrayValue = arrayOfIntegers[i]; // select the value of the array elements one by one
      var differenceValue = ( seletedArrayValue - targetValue );  // to get the difference value
      
      if ( arrayOfIntegers.indexOf(differenceValue) != -1 ) {  //checking if the differenceValue available in the array.
         var pair = 1;  // true condition if matches
      } else {
         var pair = 0; // false condition if not matches
      }
      totalPair[i]=pair; // adding the results(total pair) in a array
  }
      
      getSum = (total, num) => {  // Function for sumation of result from (total pair array)
        return total + num;
      }
           
      console.log("Number of pairs have a difference equal to a target value= ", totalPair.reduce(getSum))

// Updated Solution in 2 ways

let ar = [1, 2, 3, 4];

function getPairMatchesDifference(ar, diff) {
  let count = 0;
  ar.map((v, i) => {
    let index = diff + v;
    if (ar.indexOf(index) !== -1) {
      count += 1
    }
  })
  return count
}

function getPairMatchesDifferenceByHash(arr, diff) {
  let hash = {};
  let count = 0;
  arr.map(v => { hash[v] = v });
  for (let i = 0; i < arr.length; i++) {
    let index = diff + arr[i];
    if (hash[index]) {
      count += 1
    }
  }
  return count
}

console.log(getPairMatchesDifference(ar, 1));
console.log(getPairMatchesDifferenceByHash(ar, 1));

