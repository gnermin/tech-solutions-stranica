import React from "react";
export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={
        "px-4 py-2 rounded-xl font-medium transition focus:outline-none " +
        className
      }
      {...props}
    >
      {children}
    </button>
  );
}
export default Button;
