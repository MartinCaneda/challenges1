console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
  // reset the star container before rerendering stars
  starContainer.innerHTML = "";

  //--v-- your code here --v--
  for (let counter = 1; counter <= 5; counter++) {
    const myImage = document.createElement("img");
    if (filledStars >= counter) {
      myImage.src = "assets/star-filled.svg";
    } else {
      myImage.src = "assets/star-empty.svg";
    }
    myImage.addEventListener("click", function () {
      renderStars(counter);
    });
    starContainer.appendChild(myImage);
  }
  //--^-- your code here --^--
}

renderStars();
