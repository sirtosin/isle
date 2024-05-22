import Image from 'next/image';
import React from 'react'
import bg from "@/app/img/hero2.png";

export default function Banner2() {
  return (
    <section className="flex items-center flex-col lg:flex-row lg:justify-between lg:py-10 lg:px-20 my-20">
      <div className="flex flex-col space-y-4 w-full lg:w-1/2">
        <h2 className="text-[#787878] text-xl">We create . You celebrate</h2>
        <h1 className="text-[#810A82] text-5xl w-3/4 text-bold">
          Discover Amazing Features!
        </h1>
        <p className="text-[#787878] w-2/3">
          Effortlessly add guest to attend and give power to admin to watch over
          while you enjoy you big day.
        </p>
        <button className="rounded border-[1px] border-[#810A82] px-3 py-1 text-[#810A82] w-max">
          Explore
        </button>
      </div>
      <div className="w-full lg:w-1/2">
        <Image src={bg} className="w-full h-full" alt="" />
      </div>
    </section>
  );
}
