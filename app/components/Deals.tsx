import React from "react";
import { categories } from "../constants";
import Card from "./Card";
import { NairaIcon } from "../icons/Edit";

export default function Deals({ title, data, setView }: any) {
  return (
    <div onClick={() => setView(1)} className="p-10 my-10">
      <h2 className="bg-[#3399FF] px-20 py-3 text-white w-max">{title}</h2>
      <div className="flex items-center justify-center flex-wrap lg:grid lg:grid-cols-4">
        {data.map((item: any) => (
          <Card key={item.title}>
            <div className="flex space-y-4 size-[235px] flex-col p-3 cursor-pointer">
              <span className="flex items-center justify-center">
                <img
                  className="w-2/3 object-contain "
                  src={item.img}
                  alt={item.title}
                />
              </span>

              <div className="flex justify-end flex-col">
                <small className="text-xs">
                  Amazon Basics High-Speed HDMI Cable.
                </small>
                <p className="font-bold text-[#191C1F] flex items-center space-x-2">
                  <NairaIcon /> 15,000
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
