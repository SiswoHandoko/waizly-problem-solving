function timeConversion(timeString) {
    let timeArr = timeString.slice(0, 8).split(":"); // Get Clock Info only and Split by :
    let period = timeString.slice(8); // Get Period
    let hours = parseInt(timeArr[0]); // Get Hour
    
    if (period === "PM" && hours !== 12) { // Conditional for PM
        hours += 12;
    } else if (period === "AM" && hours === 12) { // Conditional for AM
        hours = 0;
    }
    
    hours = hours.toString().padStart(2, "0");  // Hour Format
    
    console.log(`${hours}:${timeArr[1]}:${timeArr[2]}`);
}

timeConversion('07:05:45PM');