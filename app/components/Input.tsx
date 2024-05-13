"use client";
import React, { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Copy } from "../icons/ManageUser";
import { EyeIcons, EyeSlash } from "../icons/Social";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: JSX.Element;
  iconFunc?: () => void;
}

export default function Input({
  label,
  name,
  placeholder,
  type,
  value,
  onChange,
  onBlur,
  icon,
  iconFunc,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <div className="font-semibold capitalize flex flex-col space-y-1 w-full">
      <label htmlFor={label} className="text-sm font-medium">
        {label}
      </label>
      <input
        type={type === "password" ? (showPassword ? "text" : "password") : type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        name={name}
        placeholder={placeholder}
        className={`p-2 outline-none rounded ${
          value
            ? "border-[1px] border-[#3399FF] text-[#979797] bg-[#EEF6FF]"
            : "border-[1px] border-gray-300 text-sm"
        } ${label === "Account Number:" && "text-[#3399FF]"}`}
      />
      {label === "Account Number:" && (
        <div
          className="relative -top-9 cursor-pointer left-[85%]"
          // onClick={handleShowPassword}
        >
          <Copy />
        </div>
      )}
      {icon && (
        <div
          onClick={iconFunc}
          className="relative -top-9 cursor-pointer left-[85%]"
          // onClick={handleShowPassword}
        >
          {icon}
        </div>
      )}
      {type === "password" && !icon && (
        <div
          className="relative -top-8 cursor-pointer w-10 left-[80%]"
          onClick={handleShowPassword}
        >
          {showPassword ? <EyeIcons /> : <EyeSlash />}
        </div>
      )}
    </div>
  );
}
