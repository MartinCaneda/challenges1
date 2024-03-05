import "./App.css";

export default function App() {
  const handleClick = () => {
    console.log("Clickity click click!");
  };

  return (
    <Button
      color="blue"
      disabled={false}
      text="click on me"
      onClick={handleClick}
    />
  );
}

function Button({ color, disabled, text, onClick }) {
  const buttonStyle = {
    color: color,
  };

  return (
    <div>
      <button style={buttonStyle} disabled={disabled} onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
