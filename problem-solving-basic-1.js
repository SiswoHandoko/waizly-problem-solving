function miniMaxSum(arr) {
    arr.sort((a, b) => a - b); // Sort the array in ascending order
    let minSum = arr.slice(0, 4).reduce((acc, num) => acc + num, 0); // Sum first four elements
    let maxSum = arr.slice(1, 5).reduce((acc, num) => acc + num, 0); // Sum last four elements
    console.log(minSum, maxSum); // Print Output
}

let arr = [1,2,3,4,5];
miniMaxSum(arr);
