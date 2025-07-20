
let grades = [8, 15, 12, 19, 7];

const newGrade = 14;
grades.push(newGrade);
console.log('After adding a new grade:', grades);


const minGrade = Math.min(...grades);
const minIndex = grades.indexOf(minGrade);
grades.splice(minIndex, 1);
console.log(`After removing lowest grade (${minGrade}):`, grades);

const sum = grades.reduce((acc, val) => acc + val, 0);
const average = sum / grades.length;
console.log(`Avarage grade: ${average.toFixed(2)}`);


const maxGrade = Math.max(...grades);
console.log(`Highest grade: ${maxGrade}`);


console.log(`Calculation sum of grades: ${sum}`);


const aboveTwelveCount = grades.filter(g => g > 12).length;
console.log(`Amount grades are above 12: ${aboveTwelveCount}`);

