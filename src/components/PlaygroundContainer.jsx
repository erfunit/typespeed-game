const PlaygroundContainer = ({ children }) => {
  return (
    <div className="container my-24 p-5 bg-white rounded-lg mx-auto 2xl:max-w-screen-xl flex flex-col items-center py-10 gap-4">
      {children}
    </div>
  );
};

export default PlaygroundContainer;
