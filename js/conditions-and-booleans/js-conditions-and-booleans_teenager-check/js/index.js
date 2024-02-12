const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  // Number(x) converts the string from the input to a number
  // Beware: input values are *always* strings!
  const age = Number(input.value);

  // Exercise:
  if (age > 12 && age < 20) {
    output.value = "you're a teen";
  } else {
    output.value = "you're not a teen";
  }
});

// Use conditions and the logical AND operator to write
// "You are a teen." or "You are not a teen." into the output.
