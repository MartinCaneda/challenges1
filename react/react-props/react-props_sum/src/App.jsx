import "./App.css";

export default function App() {
  return <Sum valueA={34} valueB={76} />;
}

function Sum({ valueA, valueB }) {
  const addition = valueA + valueB;
  return (
    <h1>
      {valueA}+{valueB} = {addition}
    </h1>
  );
}
