import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  styles: string;
  loading?: boolean;
  icon?: JSX.Element;
}
export default function Button({
  label,
  onClick,
  styles,
  loading,
  icon,
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={` text-white flex items-center justify-center rounded py-2 px-6 capitalize font-medium hover:scale-95 transition duration-700  ease-in-out ${styles}`}
    >
      {loading ? "loading..." : label} <p className="ml-3 mt-1 ">{icon}</p>
    </button>
  );
}
