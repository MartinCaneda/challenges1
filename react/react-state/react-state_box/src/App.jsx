import "./App.css";
import { useState } from "react";

export default function App() {
  const [state, setState] = useState(false);

  function handleClick() {
    setState(!state);
    // Check that the value changes correctly.
    /* console.log(isActive); */
  }

  return (
    <main>
      <div className={`box ${state ? "box--active" : ""}`} />
      <button onClick={handleClick}>Activate</button>
    </main>
  );
}

/* onClick={() => {setState(!state)}} */
