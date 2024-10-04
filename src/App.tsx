import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function getWord(){
  return words[Math.floor(Math.random() * words.length)];
}

function App() {
  // this usestate will give us the random word which we are guessing
  const [wordToGuess, setWordtoGuess] = useState(getWord);

  // guessing the letters
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  //filtering incorrect letters from guessed letters
  const inCorrectLetters = guessedLetters.filter(
    (letter) => !wordToGuess.includes(letter)
  );

  const isLoser = inCorrectLetters.length >= 6;
  const isWinner = wordToGuess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isWinner) return;

      setGuessedLetters((currentLetters) => [...currentLetters, letter]);
    },
    [guessedLetters , isLoser , isWinner]
  );
  // creating an useEffect hook for handling keyboard events
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]); // we added guessedletters because every time current wrong letter is terminating whole figure


  // setnewword
  useEffect( () => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return

     e.preventDefault() 
     setGuessedLetters([])
     setWordtoGuess(getWord())
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    }
  },[])
  return (
    // div style for all the content
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        overflow: "hidden"
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "Winner! - Refresh to try Again"}
        {isLoser && "Nice Try! - Refresh to try Again"}
      </div>

      <HangmanDrawing numberOfGuesses={inCorrectLetters.length} />
      <HangmanWord reveal = {isLoser} guessedLetters={guessedLetters} wordToGuess={wordToGuess} />
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
        disabled={isWinner || isLoser}
          activeLetter={guessedLetters.filter((letter) =>
            wordToGuess.includes(letter)
          )}
          inactiveLetter={inCorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
