type HangmanWordProps = {
  reveal?: boolean
  guessedLetters: string[];
  wordToGuess: string;
};

export function HangmanWord({ guessedLetters, wordToGuess , reveal = false}: HangmanWordProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: ".25em",
        fontSize: "6rem",
        fontWeight: "bold",
        fontFamily: "monospace",
        textTransform: "uppercase",
      }}
    >
      {/* Rendering each character of the word individually */}
      {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          {/* checking if word correct then show otherwise don't show */}
          <span
            style={{
              visibility: guessedLetters.includes(letter) || reveal
                ? "visible"
                : "hidden",
                color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            
            }}
          >
            {" "}
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
}
