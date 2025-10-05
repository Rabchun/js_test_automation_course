const student1 = {
    name: 'Yuliia',
    age: 34,
    grade: 20,
    subjects: ['Mathematics', 'English', 'Economics'],
    isActive: true
};

const student2 = {
    name: 'Jon',
    age: 34,
    grade: 18,
    subjects: ['English', 'History', 'Chemistry'],
    isActive: false
};

function addSubject(student1, newSubject) {
    student1.subjects.push(newSubject);
}

function updateGrade(student1, newGrade) {
    student1.grade = newGrade;
}

function compareAges(student1, student2) {
    if (student1.age > student2.age) {
        return `${student1.name} is older than ${student2.name}`;
    } else if (student1.age < student2.age) {
        return `${student2.name} is older than ${student1.name}`;
    } else {
        return `${student1.name} and ${student2.name} are the same age`;
    }
}

addSubject(student1, 'Physics');
console.log(`Added subject for student1: ${student1.subjects[3]}`);
updateGrade(student1, 25);
console.log(`Updated grade for student1: ${student1.grade}`);
console.log(compareAges(student1, student2));