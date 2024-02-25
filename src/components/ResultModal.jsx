import Button from "./Button";

export const ResultModal = ({
  lastIndex,
  wrongCount,
  correctCount,
  restartHandler,
}) => {
  return (
    <>
      <div className="fixed top-0 left-0 bg-black/25 w-screen h-screen" />
      <div className="fixed px-4 top-0 left-0 bg-black/25 w-screen h-screen flex justify-center items-center">
        <div className="w-full flex flex-col gap-1 bg-white max-w-lg rounded-md p-3">
          <h2 className="text-2xl font-semibold">Result</h2>
          <div className="border p-2 rounded-md">
            speed: {lastIndex + 1} WPM (words per minutes)
          </div>
          <div className="border p-2 rounded-md border-green-500">
            correct words: {correctCount}
          </div>
          <div className="border p-2 rounded-md border-red-500">
            incorrect words: {wrongCount}
          </div>
          <Button onClick={restartHandler} fullWidth>
            start again
          </Button>
        </div>
      </div>
    </>
  );
};
