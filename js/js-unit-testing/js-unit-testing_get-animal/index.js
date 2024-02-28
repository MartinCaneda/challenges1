export function getAnimal(animalName) {
  if (animalName === "cats") {
    return "I totally love cats!";
  } else if (animalName) {
    return `I like ${animalName}!`;
  } else {
    return "I do not like animals at all!";
  }
}
