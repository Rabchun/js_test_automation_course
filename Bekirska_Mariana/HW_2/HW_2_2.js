var name = 'Klavdiy';
var age = 100;
var isWorked = true;
if (typeof age === "number" ) {
    console.log("The age is the number");
}

if (isWorked === true || isWorked === false ) {
    console.log["isWorked = " + isWorked];
}

if (age < 18) {
    console.log("Ви ще неповнолітній(я)");
} else if (age >= 18 && isWorked === true) {
    console.log("Ви повнолітній працівник.");
} else if (age >=18 && isWorked === false) {
     console.log("Ви повнолітній, але поки не працюєте.");
}

if (isWorked === true) {
     console.log("Скільки ви років працюєте?");
     var experience = 70;
     if (experience < 3) {
        console.log("Ви — початківець. Все ще попереду!");
     } else if (experience >= 3 && experience <= 9) {
         console.log("Ви — досвідчений працівник.");
     } else if (experience >= 10) {
        console.log("Ви — справжній профі у своїй справі!");
    }
} 