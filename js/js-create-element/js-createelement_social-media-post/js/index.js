/* ## Task

This page shows an example of a social media post. Your 
task is to replicate the social media post with JavaScript. 
Use `document.createElement()` to generate all HTML elements 
separately.

Don't use `.innerHTML` to create the HTML in one instance, 
but use multiple calls of `document.createElement()` 
instead.

The `index.html` demonstrates the required HTML tags, 
structure and class names.

Append the second social media post to the body. Don't 
forget to add the event listener to the like button. You 
can use the function `handleLikeButtonClick` for the event 
listener. */

console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.
const newPost = document.createElement("section");
newPost.classList.add("post");
document.body.append(newPost);

const newContent = document.createElement("p");
newContent.classList.add("post__content");
newContent.innerHTML =
  "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";
newPost.append(newContent);

const newFooter = document.createElement("footer");
newFooter.classList.add("post__footer");
newPost.append(newFooter);

const newSpan = document.createElement("span");
newSpan.classList.add("post__username");
newSpan.innerHTML = "@username";
newFooter.append(newSpan);

const newButton = document.createElement("button");
newButton.classList.add("post__button");
newButton.innerHTML = "♥ Like";
newFooter.append(newButton);

newButton.addEventListener("click", handleLikeButtonClick);
