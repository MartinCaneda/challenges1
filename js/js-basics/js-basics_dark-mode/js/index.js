console.clear();

const bodyElement = document.querySelector('[data-js="body"]');

const darkButton = document.querySelector('[data-js="dark-mode-button"]');
darkButton.addEventListener("click", () => {
  body.classList.add("dark");
});

const lightButton = document.querySelector('[data-js="light-mode-button"]');
lightButton.addEventListener("click", () => {
  body.classList.remove("dark");
});

const toggleButton = document.querySelector('[data-js="toggle-button"]');
toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark");
});
