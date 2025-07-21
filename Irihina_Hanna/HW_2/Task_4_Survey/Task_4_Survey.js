let name = prompt("Введіть ваше ім’я:");
let age = Number(prompt("Введіть ваш вік:"));
let working = prompt('Ви працюєте? (так/ні):');
let experience

// Перевірка коректності відповіді 
if (isNaN(age)) {
  alert('Вік має бути числом');
}
 
working = working.toLowerCase();
 if (working !== "так" && working !== "ні") {
  alert('Будь ласка, введіть лише "так" або "ні" на запит "Ви працюєте?"');
} else {
  if (age < 18) {
    console.log("Ви ще неповнолітній(я)");
  } else if (age >= 18 && working === "так") {
    console.log("Ви повнолітній(я) працівник(ця).");
    experience = Number(prompt("Скільки років Ви вже працюєте?"));
    if (experience < 3) {
      console.log("Ви — початківець. Все ще попереду!");
    } else if (experience >= 3 && experience <= 9) {
      console.log("Ви досвідчений працівник(ця).");
    }
    else if (experience > 9) {
      console.log("Ви — справжній профі у своїй справі!");
    }
  } else if (age >= 18 && working === "ні") {
    console.log("Ви повнолітній(я), але поки не працюєте.");
  } }

