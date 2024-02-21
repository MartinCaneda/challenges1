console.clear();

const cards = [
  {
    id: "1",
    question: "How often can I use <header>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "2",
    isBookmarked: false,
    question: "How often can I use <aside>?",
    answer: "As often as you like.",
    tags: ["html", "elements", "basic"],
  },
  {
    id: "3",
    isBookmarked: true,
    question: "On which types can I use destructuring assignment?",
    answer: "On Objects and Arrays",
    tags: ["js", "next"],
  },
];

const onlyCardWithIdTwo = cards.filter((element) => element["id"] === "2");
console.log(onlyCardWithIdTwo);

const allCardsWith3Tags = cards.filter(
  (element) => element["tags"].length === 3
);
console.log(allCardsWith3Tags);

const allCardsThatAreNotBookmarked = cards.filter(
  (element) => element["isBookmarked"] !== true
);
console.log(allCardsThatAreNotBookmarked);

const allCardsWithTagsHTMLOrJSThatAreBookmarked = cards.filter(
  (element) =>
    element["isBookmarked"] &&
    (element.tags.includes("html") || element.tags.includes("js"))
);
console.log(allCardsWithTagsHTMLOrJSThatAreBookmarked);
/* cards.filter((element) =>
  element["isBookmarked"].filter((element) => 
    element.tags.includes("html") || bookmark.tags.includes("js")
  )
); */

export {
  onlyCardWithIdTwo,
  allCardsWith3Tags,
  allCardsThatAreNotBookmarked,
  allCardsWithTagsHTMLOrJSThatAreBookmarked,
};
