import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GooglePlayIcon, OpenIcon } from "../icons/Social";

export default function Banner() {
  return (
    <div className=" w-full lg:py-10 h-[450px] sm:h-[500px] lg:px-20 bg-gradient-to-b from-[#2E002F] to-[#000]">
      <section className="flex items-center justify-center pt-16 lg:pt-5  xl:h-max">
        <div className="flex flex-col space-y-5 text-white p-2 w-full items-center justify-center">
          <h1 className="text-5xl text-center sm:text-7xl lg:text-8xl text-bold">
            Forever Begins Here!
          </h1>
          <p className="w-3/4 sm:w-1/2 text-center text-xs my-7 sm:text-xl lg:text-2xl mb-10">
            Join Joseph and Zion's wedding, be a part of our union and share our
            joy with us. #AduraTemi’24
          </p>
          <div className="mt-5 flex flex-col space-y-3 sm:space-y-0 cursor-pointer sm:flex-row sm:space-x-5 items-center justify-center">
            <Link
              href="/register"
              className="flex items-center space-x-3 text-center w-max py-1.5 px-10 sm:px-8 sm:text-xl bg-[#810A82] rounded"
            >
              <p>Register</p>
              <p>
                <OpenIcon />
              </p>
            </Link>
            <a
              target="_blank"
              href="https://play.google.com/store/apps/details?id=com.walkisle&pli=1"
              className="rounded px-3 py-1 bg-transparent border-[1px] border-gray-50"
            >
              <GooglePlayIcon />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
