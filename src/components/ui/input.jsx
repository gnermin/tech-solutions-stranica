import React from "react";
export function Input({ className = "", ...props }) {
  return (
    <input
      className={
        "w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white " +
        "placeholder:text-slate-400 focus:border-blue-400 transition " +
        className
      }
      {...props}
    />
  );
}
export default Input;
