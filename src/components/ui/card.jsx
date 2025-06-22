import React from "react";
export function Card({ className = "", children, ...props }) {
  return (
    <div
      className={"rounded-2xl bg-slate-900/70 shadow-md " + className}
      {...props}
    >
      {children}
    </div>
  );
}
export function CardContent({ className = "", children, ...props }) {
  return (
    <div className={"p-6 " + className} {...props}>
      {children}
    </div>
  );
}
export default Card;
