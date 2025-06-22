import React from "react";
export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={
        "w-full px-3 py-2 rounded-lg bg-slate-800 border border-slate-700 text-white " +
        "placeholder:text-slate-400 focus:border-blue-400 transition resize-none " +
        className
      }
      {...props}
    />
  );
}
export default Textarea;
