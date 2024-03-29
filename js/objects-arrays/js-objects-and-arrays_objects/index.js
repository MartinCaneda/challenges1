console.clear();

// EXERCISE 1
// Create an object personWithNameAgeEmail with the properties "name", "age" and "email".

const personWithNameAgeEmail = {
  name: "martin",
  age: 33,
  email: "email@email.com",
};
personWithNameAgeEmail;

// EXERCISE 2
// Set the values of name and age equal to the corresponding values of the personAlex object.

const personAlex = {
  name: "Alex",
  age: 24,
};

let nameOfAlex = personAlex.name;
let ageOfAlex = personAlex.age;

// EXERCISE 3
// Change the value of name to "Alex" and the value of age to "35" by updating the object personToChange: person.existingProperty = newValue.

const personToChange = {
  name: "Kim",
  age: 24,
};
personToChange.name = "Alex";
personToChange.age = 35;
personToChange;

// EXERCISE 4
// Add the properties age "5" and breed "husky" to the object petPluto: pet.newProperty = newValue.

const petPluto = {
  name: "Pluto",
  species: "dog",
};

petPluto.age = 5;
petPluto.breed = "husky";
petPluto;

export {
  personWithNameAgeEmail,
  nameOfAlex,
  ageOfAlex,
  personToChange,
  petPluto,
};
