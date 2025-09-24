//Create an object representing a student with properties: name, age, grade, subjects (array), and isActive (boolean)
let St_obj = {
    name : "Miles",
    age : 21,
    grade : 10,
    subjects : ["Math", "English", "History"],
    isActive : true
}
console.log((St_obj));

///Add a new subject to the subjects array
St_obj.subjects.push ("Physics");
console.log((St_obj));

//Update the student's grade
St_obj.grade = 11;
console.log((St_obj));

///Create a second student object and compare their ages
let St_obj2 = {
    name : "Jack",
    age : 22,
    grade : 11,
    subjects : ["Math", "English", "Chemistry"],
    isActive : true
}

if (St_obj.age > St_obj2.age) {
    console.log ( `${St_obj.name} is older than  ${St_obj2.name}` );
} else if (St_obj.age < St_obj2.age) {
     console.log ( `${St_obj2.name} is older than  ${St_obj.name}` );
} else {
    console.log ( `${St_obj.name} is the same age as  ${St_obj2.name}` );
}

// Another variant of age comparison

console.log(`${St_obj.age > St_obj2.age ? St_obj.name : St_obj2.name} is older`);
