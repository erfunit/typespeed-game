const Word = ({ word, selectedIndex, index, correctWords, wrongWords }) => {
  return (
    <span
      className={`${index === selectedIndex ? "underline" : ""} ${
        correctWords.findIndex((item) => index === item) !== -1
          ? "text-green-500"
          : ""
      } ${
        wrongWords.findIndex((item) => index === item) !== -1
          ? "text-red-500"
          : ""
      }`}
    >
      {word}{" "}
    </span>
  );
};

export default Word;
