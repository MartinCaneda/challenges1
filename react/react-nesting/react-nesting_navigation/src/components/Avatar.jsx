import { Image } from "./Image";

export function Avatar() {
  return (
    <button
      type="button"
      onClick={() => console.log("I could toggle a profile!")}
      aria-label="toggle profile"
    >
      <Image src="./src/assets/avatar.jpg" alt="avatar" />
    </button>
  );
}
