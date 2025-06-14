import React from "react";

export function Card({ children, className = "", ...props }) {
  return (
    <div className={`rounded-lg border p-4 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "", ...props }) {
  return (
    <div className={`mt-2 ${className}`} {...props}>
      {children}
    </div>
  );
}
