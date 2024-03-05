import "./App.css";

export default function App() {
  return (
    <main>
      <Button>Yo Yo</Button>
      <Button>adf</Button>
      <Button>wwwwww</Button>
      <Button>ñlkko</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
