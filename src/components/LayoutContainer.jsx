const LayoutContainer = ({ children }) => {
  return (
    <div className="flex justify-center items-center px-2 fixed top-0 left-0 bg-slate-200 w-screen h-screen">
      {children}
    </div>
  );
};

export default LayoutContainer;
