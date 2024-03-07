import "./Card.css";
import { Fragment } from "react";

/* export default function Card({ name }) {
  return <p className="card">{name}</p>;
} */

export default function Card() {
  const fruits = [
    {
      id: 1337,
      name: "Banana",
      color: "yellow",
      class: "card--yellow",
    },
    {
      id: 1338,
      name: "Apple",
      color: "red",
      class: "card--red",
    },
    {
      id: 1339,
      name: "Orange",
      color: "orange",
      class: "card--orange",
    },
    {
      id: 1340,
      name: "Pineapple",
      color: "brown",
      class: "card--brown",
    },
    {
      id: 1341,
      name: "Pear",
      color: "green",
      class: "card--green",
    },
  ];

  return (
    <dl>
      {fruits.map(({ id, name, color, class: className }) => (
        <Fragment key={id}>
          <p className={className}>
            {name} {color}
          </p>
        </Fragment>
      ))}
    </dl>
  );
}
