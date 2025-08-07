let name;
let age;
let working;
let experience;

name = prompt("Введіть ваше ім’я:");

while (true) {
  age = Number(prompt("Введіть ваш вік:"));
   if (isNaN(age)) {
    alert("Вік має бути числом.");
    continue;
  }

  working = prompt("Ви працюєте? (так/ні):");
  working = working.toLowerCase();

 
  if (working !== "так" && working !== "ні") {
    alert('Будь ласка, введіть лише "так" або "ні" на запит "Ви працюєте?"');
    continue;
  }


  if (age < 18) {
    console.log("Ви ще неповнолітній(я)");
    break;
  }

  if (working === "так" && age >=18) {
    console.log("Ви повнолітній(я) працівник(ця).");
    experience = Number(prompt("Скільки років Ви вже працюєте?"));

    if (isNaN(experience)) {
      alert("Досвід має бути числом.");
      continue;
    }

    if (experience < 3) {
      console.log("Ви — початківець. Все ще попереду!");
    } else if (experience >= 3 && experience <= 9) {
      console.log("Ви досвідчений працівник(ця).");
    } else if (experience > 9) {
      console.log("Ви — справжній профі у своїй справі!");
    }
  } else {
    console.log("Ви повнолітній(я), але поки не працюєте.");
  }

 
  break;
}

