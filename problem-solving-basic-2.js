function plusMinus(arr) {
    // Grouping by Positive, Negative and 0 number
    const counts = [
        arr.filter(el => el > 0).length,
        arr.filter(el => el < 0).length,
        arr.filter(el => el === 0).length
    ];

    // Calculate Process
    for (const count of counts) {
        const ratio = (count / arr.length).toFixed(6);
        console.log(ratio); // Print Output
    };
}
let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
