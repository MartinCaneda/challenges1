/* 
Use JavaScript to react to the form submission.

Log all form data (in object form) into the console in the
submit event handler.

Make sure the form is reset and the First Name input is
focused after submission. */
console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const userData = Object.fromEntries(formData);
  console.log("userData", userData);

  form.reset();

  event.target.firstName.focus();
});
