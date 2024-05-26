import Image from "next/image";
import React from "react";
import bg from "@/app/img/img1.png";
import bg1 from "@/app/img/img2.png";
import bg2 from "@/app/img/img3.png";
import bg3 from "@/app/img/cubed.png";

export default function Banner2() {
  return (
    <section className="bg-[#F2F7F8]">
      <article>
        <h2 className=" text-3xl text-center my-10 font-semibold">
          WalkTheAisle With Us
        </h2>

        <div className="w-full p-5 lg:w-[90%] flex items-center sm:items-start gap-2  flex-col sm:grid sm:grid-cols-3 mx-auto justify-center">
          <Image src={bg} className="  object-fill size-full sm:size-[350px]" alt="" />
          <Image src={bg1} className="size-full object-fill sm:size-[350px]" alt="" />
          <Image src={bg2} className="size-full object-fill sm:size-[350px]" alt="" />
        </div>
      </article>
      <article className="flex mx-auto w-full p-5 items-center sm:items-start sm:w-3/4 mt-40 lg:justify-center relative flex-col space-y-4 sm:flex-row">
        <div className="bg-[#FFD4FF] p-5 lg:p-10 w-full sm:w-2/3  sm:h-[150px]">
          <h1 className="font-bold text-3xl">Together Forever</h1>
          <p className="">
            Join our wedding celebration and <br className="hidden sm:flex" />{" "}
            share our joy
          </p>
        </div>
        <div className="w-3/4 sm:w-1/2 lg:w-1/3 sm:ml-12 lg:ml-48 sm:absolute sm:left-[40%] ">
          <Image src={bg3} className="w-full" alt="" />
        </div>
      </article>
    </section>
  );
}
