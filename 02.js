
// Write a function solution that, given an array A consisting of N integers, returns the maximum sum of two numbers whose digits add up to an equal sum. If there are no two numbers whose digits have an equal sum, the function should return -1.
const solution = (arr) => {

    const sum = (n) => { //returns sum of the digits
        return String(n).split('').reduce((acc, cur) => +acc + +cur);
    };

    let obj = {}; //key: sum of each elem's digits, val: index of elem
    let sums = [], currentSum; //ret arr for storing sums of elem's pairs

    arr.forEach((el, i, ar) => {

        let sumField = sum(el);

        if (obj.hasOwnProperty(sumField)) {
            currentSum = arr[obj[sumField]] + ar[i]; //if there has been an elem whos digits give the same sum, find it via index, push sum of the ints in the ret arr
            sums.push(currentSum);
        } else {
            obj[sumField] = i; //store index of el 
        }
    });

     if(sums.length > 0) {
         return Math.max(...sums)
     };

     return -1;

}

console.log(solution([42, 33, 60]))