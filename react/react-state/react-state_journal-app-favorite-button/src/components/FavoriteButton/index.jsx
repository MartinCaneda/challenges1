import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  // this should be a state variable
  //const isFavorite = false;
  const [state, setState] = useState(false);
  return (
    <button
      className="favorite-button"
      onClick={() => setState(!state)}
      aria-label="favorite"
    >
      {state ? <StarFilled /> : <Star />}
    </button>
  );
}
