console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  var currentDate = new Date();
  var currentHour = currentDate.getHours();
  if (currentHour >= 6 && currentHour <= 12) {
    const greetingm = "Good moooorning";
    return greetingm;
  } else if (currentHour >= 13 && currentHour <= 18) {
    const greetinga = "Good afternoon";
    return greetinga;
  } else if (currentHour >= 19 && currentHour <= 22) {
    const greetinge = "Good evening";
    return greetinge;
  } else if (currentHour >= 23 && currentHour <= 5) {
    const greetingn = "Good night";
    return greetingn;
  }
}

function getDayColor() {
  // Code here
  var currentDate = new Date();
  var currentDay = currentDate.getDay();
  if (currentDay >= 1 && currentDay <= 4) {
    const col1 = "lightblue";
    return col1;
  } else if (currentDay === 0) {
    const col2 = "darkgray";
    return col2;
  } else if (currentDay >= 5 && currentDay <= 6) {
    const col3 = "hotpink";
    return col3;
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
