import React from "react";

export function Textarea({ className = "", ...props }) {
  return (
    <textarea
      className={`border border-gray-300 rounded-md px-4 py-2 resize-y focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent ${className}`}
      {...props}
    />
  );
}
