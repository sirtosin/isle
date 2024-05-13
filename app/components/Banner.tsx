import React from "react";
import Image from "next/image";
import bg from "@/app/img/hero.png";

export default function Banner() {
  return (
    <div className=" w-full h-[600px] relative z-20">
      <Image src={bg} className=" -z-10 object-cover h-full" fill alt="" />
      <section className="flex items-center justify-center">
        <div className="flex flex-col space-y-5 mx-auto items-center justify-center absolute top-56 text-white">
          <h1 className="text-center text-4xl sm:text-6xl font-bold">
            Sell_Japa_Properties
          </h1>
          <p className="text-center w-3/4 sm:text-xl">
            Relocating? Sell your home hassle-free. Upload & list now!
          </p>
        </div>
      </section>
    </div>
  );
}
