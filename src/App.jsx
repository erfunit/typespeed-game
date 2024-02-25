import { useEffect, useRef, useState } from "react";
import { ResultModal } from "./components/ResultModal";
import { getText } from "./lib/getText";
import Button from "./components/Button";
import Word from "./components/Word";
import LayoutContainer from "./components/LayoutContainer";
import PlaygroundContainer from "./components/PlaygroundContainer";

const App = () => {
  const [generatedText, setGeneratedText] = useState(getText());
  const inputRef = useRef(null);
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState([]);
  const [wrongWords, setWrongWords] = useState([]);
  const [time, setTime] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    if (time === 0) return;
    const timeout = setTimeout(() => {
      setTime((curr) => curr - 1);
      setIsEnded(time === 1);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [time]);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);

    if (value.endsWith(" ")) {
      const trimmedValue = value.trim();
      if (trimmedValue === "") return;
      if (trimmedValue === generatedText[selectedIndex]) {
        setCorrectWords((curr) => {
          return [...curr, selectedIndex];
        });
      } else {
        setWrongWords((curr) => [...curr, selectedIndex]);
      }
      setInputValue("");
      setSelectedIndex((curr) => curr + 1);
      if (generatedText.length - 1 === selectedIndex) {
        setIsEnded(true);
      }
    }
  };

  const restartHandler = () => {
    setIsEnded(false);
    setCorrectWords([]);
    setWrongWords([]);
    setGeneratedText(getText());
    setTime(60);
    inputRef.current.focus();
    setGameStarted(true);
    setSelectedIndex(0);
    setInputValue("");
  };

  return (
    <LayoutContainer>
      <PlaygroundContainer>
        {!gameStarted && (
          <Button
            onClick={() => {
              setTime(60);
              setGameStarted(() => true);
            }}
            disabled={time !== 0}
          >
            Start
          </Button>
        )}
        <br />
        <h1 className="capitalize text-3xl font-bold">typing speed test</h1>
        <span
          className={`text-2xl font-semibold ${
            time < 10 && time !== 0 ? "text-red-500" : "text-blue-500"
          }`}
        >
          {time}s
        </span>
        <p className={time === 0 ? "opacity-40" : ""}>
          {generatedText.map((word, index) => (
            <Word
              key={`${word}-${index}`}
              word={word}
              correctWords={correctWords}
              wrongWords={wrongWords}
              index={index}
              selectedIndex={selectedIndex}
            />
          ))}
        </p>
        {gameStarted && (
          <input
            ref={inputRef}
            autoFocus
            placeholder={generatedText[selectedIndex]}
            value={inputValue}
            onChange={handleChange}
            className="focus:outline-none text-center w-full max-w-md border-b border-b-blue-500 p-2 my-4"
          />
        )}
        {isEnded && (
          <ResultModal
            lastIndex={selectedIndex}
            correctCount={correctWords.length}
            wrongCount={wrongWords.length}
            restartHandler={restartHandler}
          />
        )}
      </PlaygroundContainer>
    </LayoutContainer>
  );
};

export default App;
