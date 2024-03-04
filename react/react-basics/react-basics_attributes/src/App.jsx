import "./App.css";

export default function App() {
  return (
    <article className="article">
      <h2 className="article__title">Some Text</h2>
      <label htmlFor="labelInput">Input:</label>
      <input type="text" id="labelInput" />
      <a
        className="article__link"
        href="https://de.wikipedia.org/wiki/TypeScript"
      >
        Typescript
      </a>
    </article>
  );
}
