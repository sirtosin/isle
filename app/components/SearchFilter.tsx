"use client";
import React, { useState } from "react";
import Card from "./Card";
import { BlackArrow } from "../icons/Arrow";
import Input from "./Input";
import { SearchField } from "./Search";
import { NairaIcon } from "../icons/Edit";
import { categories } from "../constants";
import { Location } from "../icons/Location";
import ModalCard from "./modal/Modal";

export default function SearchFilter({setView}:any) {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal((prev) => !prev);

  return (
    <div>
      <aside className=" bg-white p-10 shadow-sm w-full">
        <h2 className="font-bold text-base sm:text-xl">
          Search Results - Air conditioner Hisense
        </h2>
      </aside>
      {modal && <AllLocations modal={modal} handleModal={handleModal} />}
      <article className="flex xl:space-x-3">
        <section className="w-1/3 hidden md:flex md:flex-col">
          <Card>
            <div
              onClick={handleModal}
              className="flex items-center justify-between p-5 cursor-pointer"
            >
              <span>
                <h1>Location </h1>
                <p className="font-bold text-[#3A3A3A]">Surulere</p>
              </span>
              <span className="bg-[]">
                <BlackArrow />
              </span>
            </div>
          </Card>
          <Card>
            <section className="p-5">
              <span className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Price (&#8358;)</h2>
                <p className="w-[60px] h-1 bg-[#3A3A3A] rounded-full" />
              </span>
              <div className="flex items-center justify-between my-2">
                <aside className="border-2 border-[#000] rounded p-2 w-[40%] capitalize">
                  <p className="text-[#868686] font-bold text-sm">min</p>
                  <Input
                    type="number"
                    style={{
                      border: "none",
                      width: "80%",
                    }}
                    label=""
                  />
                </aside>
                <p className="w-[40px] rounded-full h-1 bg-[#3A3A3A]" />

                <aside className="border-2 border-[#000] rounded p-2 w-[40%] capitalize">
                  <p className="text-[#868686] font-bold text-sm">max</p>
                  <Input
                    type="number"
                    label=""
                    style={{
                      border: "none",
                      width: "80%",
                    }}
                  />
                </aside>
              </div>
              <div className="w-full">
                <span className="flex items-center space-x-2">
                  <input type="radio" value="" />
                  <p>Under 2000</p>
                </span>
                <span className="flex items-center space-x-2">
                  <input type="radio" value="" />
                  <p> 2000 - 5000</p>
                </span>
                <span className="flex items-center space-x-2">
                  <input type="radio" value="" />
                  <p>5000 - 10000</p>
                </span>
                <span className="flex items-center space-x-2">
                  <input type="radio" value="" />
                  <p>10000 - 20000</p>
                </span>
                <span className="flex items-center space-x-2">
                  <input type="radio" value="" />
                  <p>20000 - 40000</p>
                </span>
                <span className="flex items-center space-x-2">
                  <input type="radio" value="" />
                  <p>Above 40000</p>
                </span>
                <p className="ml-auto text-[#3399FF] text-sm font-bold">Save</p>
              </div>
              <hr className="my-4" />
              <div>
                <span className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Condition</h2>
                  <p className="w-[60px] h-1 bg-[#3A3A3A] rounded-full" />
                </span>
                <div>
                  <span className="flex items-center space-x-2">
                    <input type="checkbox" value="" />
                    <p>Brand New</p>
                  </span>
                  <span className="flex items-center space-x-2">
                    <input type="checkbox" value="" />
                    <p> Refurbished</p>
                  </span>
                  <span className="flex items-center space-x-2">
                    <input type="checkbox" value="" />
                    <p>Used</p>
                  </span>
                </div>
              </div>
              <hr className="my-4" />
              <div>
                <span className="flex items-center justify-between">
                  <h2 className="text-xl font-bold">Brand</h2>
                  <p className="w-[60px] h-1 bg-[#3A3A3A] rounded-full" />
                </span>
                <div className="">
                  <SearchField
                    inputText={""}
                    setInputText={() => {}}
                    disabled={false}
                    style="!w-full"
                  />
                </div>

                <div>
                  <span className="flex items-center space-x-2">
                    <input type="checkbox" value="" />
                    <p>LG</p>
                  </span>
                  <span className="flex items-center space-x-2">
                    <input type="checkbox" value="" />
                    <p> Hisense</p>
                  </span>
                  <span className="flex items-center space-x-2">
                    <input type="checkbox" value="" />
                    <p>Lenovo</p>
                  </span>
                  <span className="flex items-center space-x-2">
                    <input type="checkbox" value="" />
                    <p>Century</p>
                  </span>
                </div>
              </div>
            </section>
          </Card>
        </section>
        <section className="w-full items-center justify-center flex flex-wrap sm:w-2/3 md:grid md:grid-cols-2 lg:grid-cols-3">
          {categories.map((item: any) => (
            <Card key={item.title}>
              <div
                onClick={() => setView(1)}
                className="flex space-y-4 w-[255px] flex-col p-5 cursor-pointer"
              >
                <span className="flex items-center justify-center">
                  <img
                    className="w-1/2 object-contain h-[100px]"
                    src={item.img}
                    alt={item.title}
                  />
                </span>

                <div className="flex justify-end flex-col">
                  <small className="text-xs">
                    {"Amazon Basics High-Speed HDMI Cable."?.slice(0, 30)}...
                  </small>
                  <p className="font-bold text-[#191C1F] flex items-center space-x-2">
                    <NairaIcon /> 15,000
                  </p>
                  <div className=" mt-4 space-y-3">
                    <button className="text-white bg-[#FF9333] p-2 w-max rounded">
                      Refurbished
                    </button>
                    <span className="flex items-center space-x-4">
                      <Location />
                      <p className="font-bold text-[#A2A2A2] ">
                        Lagos State, Surulere.
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </section>
      </article>
    </div>
  );
}

export const AllLocations = ({ handleModal, modal }: any) => (
  <ModalCard setOpen={handleModal} open={modal}>
    <div>
      <p className="text-center text-xl font-semibold capitalize">
       enter a location
      </p>
      <div className="my-5">
        <SearchField
          inputText={""}
          setInputText={() => {}}
          disabled={false}
          style="!w-full"
        />
      </div>
    </div>
  </ModalCard>
);
