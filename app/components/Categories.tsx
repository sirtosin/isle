import React from "react";
import { ArrowLeft, ArrowRight } from "../icons/Arrow";
import Card from "./Card";
import { categories } from "../constants"

export default function Categories() {
  return (
    <div className="w-full my-10">
      <h2 className="text-center text-3xl font-bold">Shop with Categories</h2>
      <section className="flex w-full justify-around items-center">
        <span className="size-10 cursor-pointer rounded-full p-2 bg-[#3399FF]">
          <ArrowLeft />
        </span>
        <div className="flex justify-evenly items-center overflow-x-auto whitespace-nowrap w-2/3 example">
          <div className="inline-flex">
            {categories.map((item) => (
              <Card key={item.title}>
                <div className="flex items-center justify-center space-y-4 size-[200px] flex-col p-2 cursor-pointer">
                  <img
                    className="w-2/3 object-contain"
                    src={item.img}
                    alt={item.title}
                  />
                  <p className="font-bold text-[#191C1F]">{item.title}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
        <span className="size-10 cursor-pointer rounded-full p-2 bg-[#3399FF]">
          <ArrowRight />
        </span>
      </section>
    </div>
  );
}
