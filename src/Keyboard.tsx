import styles from "./Keyboard.module.css";

const KEYS = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

type KeyboardProps = {
  disabled?: boolean
  activeLetter: string[];
  inactiveLetter: string[];
  addGuessedLetter: (letter: string) => void;
};

export function Keyboard({
  disabled=false,
  activeLetter,
  inactiveLetter,
  addGuessedLetter,
}: KeyboardProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(75px,1fr))",
        gap: ".5rem",
      }}
    >
      {/* Rendering elements of KEYS array */}
      {KEYS.map((key) => {
        const isactive = activeLetter.includes(key);// check if letter is active, highlight to green

        const isinactive = inactiveLetter.includes(key);//  check if letter is inactive, highlight to grey

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            className={`${styles.btn} ${isactive ? styles.active : ""} ${
              isinactive ? styles.inactive : ""
            }`}
            disabled={isactive || isinactive || disabled} 
            key={key}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
}
