const grades = [8, 10, 12, 14, 18];

function addGrade(grades, grade) {
  grades.push(grade);
  return grades;
}

function removeLowestGrade(grades) {
  const lowestGrade = Math.min(...grades);
  const index = grades.indexOf(lowestGrade);
  if (index !== -1) {
    grades.splice(index, 1);
  }
  return grades;
}

function calculateAverage(grades) {
  const sum = grades.reduce((acc, grade) => acc + grade, 0);
  return sum / grades.length;
}

function highestGrade(grades) {
  return Math.max(...grades);
}

function calculateSum(grades) {
  return grades.reduce((acc, grade) => acc + grade, 0);
}

function gradesAbove12(grades) {
  return grades.filter(grade => grade > 12).length;
}

addGrade(grades, 20);
removeLowestGrade(grades);
console.log(`Average grade: ${calculateAverage(grades)}`);
console.log(`The highest grade: ${highestGrade(grades)}`);
console.log(`Sum of grades: ${calculateSum(grades)}`);
console.log(`Grades above 12: ${gradesAbove12(grades)}`);
console.log(grades);