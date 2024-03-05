import "./App.css";

export default function App() {
  return <Greeting name="Martin" age={33} pob="O Grove" />;
}

function Greeting({ name, age, pob }) {
  return (
    <div>
      <h1>Hello {name}</h1>
      <h2>Edad: {age}</h2>
      <h2>El pueblo de {pob}</h2>
    </div>
  );
}
