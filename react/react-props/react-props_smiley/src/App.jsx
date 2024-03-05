import "./App.css";

export default function App() {
  return <Smiley />;
}

function Smiley({ isHappy }) {
  return <div>{isHappy ? ":)" : ":("}</div>;
}
