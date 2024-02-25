import React from "react";

const Button = ({ fullWidth, children, ...props }) => {
  return (
    <button
      className={`bg-blue-500 rounded-md active:scale-95 transition-all text-white px-4 py-2 disabled:opacity-60 ${
        fullWidth ? "w-full" : ""
      }`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
