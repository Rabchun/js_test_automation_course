// Create an array with at least 5 test scores
const scores = [11, 8, 10, 12, 8, 9];

// Add a new grade to the array
scores.push(12);
console.log(scores);

// Remove the lowest grade (Not taken into account in subsequent tasks!)
function excludeLowest(scores){
    const min = Math.min(...scores);
    return scores.filter(value => value !== min);
}
console.log(excludeLowest(scores))

// Calculate sum of grades
function sum(scores){
    let previousSum = 0;
    scores.forEach(score => {
        previousSum += score;
    })
    return previousSum;
}
console.log(sum(scores))

// Calculate and display the average grade
function averageGrade(scores){
   return sum(scores) / scores.length;
}
console.log(averageGrade(scores))

// Show how many grades are above 12 (made it universal)
function countBelowX(scores,x=12){
    const res = scores.filter(value => value < x);
    return res.length;
}
console.log(countBelowX(scores))