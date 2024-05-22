import React from "react";
import Image from "next/image";
import bg from "@/app/img/hero.png";

export default function Banner() {
  return (
    <div className=" w-full lg:py-10 lg:px-20 bg-[#2E002F] ">
      <section className="flex items-center flex-col lg:flex-row lg:justify-between ">
        <div className="flex flex-col space-y-5 text-white p-2 w-full lg:w-1/2">
          <h1 className=" text-6xl text-norm w-2/3">
            Creating the Best Day Ever!
          </h1>
          <p className="w-[200px] h-0.5 bg-[#D6A663] rounded-full"></p>
          <p className="text-center w-max py-2 px-5 sm:text-xl bg-[#810A82] rounded">
            Register
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <Image src={bg} className="w-full h-full" alt="" />
        </div>
      </section>
    </div>
  );
}
