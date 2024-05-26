"use client";
import React, { useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { IsleIcon } from "../icons/Social";
import Link from "next/link";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);

  return (
    <header className="sticky top-0 left-0 z-50 bg-[#2E002F] text-white border-b-[1px] border-white flex items-center justify-between px-10">
      <div>
        <Link href="/" className="">
          <IsleIcon />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center justify-between h-[80px] shadow-sm px-20">
        <div className="flex space-x-10 items-center">

          <Link
            href="/login"
            className="cursor-pointer py-2 px-8 border-[1px]  border-[#810A82] rounded"
          >
            {" "}
            Login
          </Link>
          <Link
            href="/register"
            className="cursor-pointer py-2 px-4 bg-[#810A82] rounded"
          >
            {" "}
            Get Started
          </Link>
        </div>
      </nav>
      {/* mobile */}
      <nav className="flex items-center justify-between h-[80px] lg:hidden px-4">
        <aside className="">
          <div>
            {!toggle ? (
              <Bars2Icon onClick={handleToggle} className="size-6 text-white" />
            ) : (
              <XMarkIcon onClick={handleToggle} className="size-6 text-white" />
            )}
          </div>
          {toggle && (
            <div className="flex flex-col space-y-4 absolute top-20  bg-white p-4 rounded right-0 shadow">


              <Link
                href="/login"
                className="color cursor-pointer py-2 px-8 border-[1px]  border-[#810A82] rounded"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="cursor-pointer py-2 px-4 bg-[#810A82] rounded"
              >
                {" "}
                Get Started
              </Link>
            </div>
          )}
        </aside>
      </nav>
    </header>
  );
}
