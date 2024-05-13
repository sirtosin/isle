"use client";
import React, { useState } from "react";
import Card from "./Card";
import { ArrowLeft, ArrowRight } from "../icons/Arrow";
import { categories, contact, refund, safetyTips } from "../constants";
import { Location } from "../icons/Location";
import { NairaIcon } from "../icons/Edit";
import Button from "./Button";
import { Copy, Phone, Phone2, UserIcon } from "../icons/ManageUser";
import Deals from "./Deals";
import ModalCard from "./modal/Modal";
import { Bank, CardPayment } from "../icons/Account";
import Payment from "./Payment";

export default function Details({ setView }: any) {
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState(false);
  const handleToggle = () => setShow((prev) => !prev);
  const handleModal = () => setModal((prev) => !prev);
  return (
    <>
      {modal && <Payment modal={modal} handleModal={handleModal} />}
      <p
        onClick={() => setView(0)}
        className="m-5 text-xl cursor-pointer font-bold"
      >
        👈 Back
      </p>
      <div className="flex sm:m-10 flex-col lg:flex-row">
        <section className="w-full lg:w-2/3">
          <Card>
            <div className="border-[1px] border-[#E4E7E9] m-10 rounded flex items-center justify-center">
              <img
                src="https://m.media-amazon.com/images/I/717X+-IdXuL._AC_UF894,1000_QL80_.jpg"
                alt=""
                className="w-full p-5"
              />
            </div>
            <div className="flex w-full justify-around items-center">
              <span className="size-10 cursor-pointer rounded-full p-2 bg-[#3399FF]">
                <ArrowLeft />
              </span>
              <div className="flex justify-evenly items-center overflow-x-auto whitespace-nowrap w-3/4 example">
                <div className="inline-flex">
                  {categories.map((item) => (
                    <Card key={item.title}>
                      <div className="flex items-center justify-center space-y-4 size-[150px] flex-col p-2 cursor-pointer">
                        <img
                          className="w-2/3 object-contain"
                          src={item.img}
                          alt={item.title}
                        />
                        {/* <p className="font-bold text-[#191C1F] text-sm sm:text-base">{item.title}</p> */}
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
              <span className="size-10 cursor-pointer rounded-full p-2 bg-[#3399FF]">
                <ArrowRight />
              </span>
            </div>
            <div className="p-10">
              <h2 className="font-bold text-lg sm:text-xl my-2">
                2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,
                256GB SSD Storage) - Space Gray
              </h2>
              <span className="flex items-center space-x-2">
                <Location />
                <p className="text-[#A2A2A2] text-xs sm:text-sm">
                  Lagos State, Surulere.
                </p>
              </span>
              <article className="w-full space-y-5 my-5">
                <div className="flex items-center justify-between ">
                  <span>
                    <h2 className="font-bold text-[#191C1F] text-sm sm:text-base ">
                      A264671
                    </h2>
                    <p className="text-[#A2A2A2] font-bold text-xs uppercase">
                      Sku
                    </p>
                  </span>
                  <span>
                    <h2 className="font-bold text-[#191C1F] text-sm sm:text-base">
                      Used
                    </h2>
                    <p className="text-[#A2A2A2] font-bold text-xs uppercase">
                      Condition
                    </p>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>
                    <h2 className="font-bold text-[#191C1F] text-sm sm:text-base">
                      A264671
                    </h2>
                    <p className="text-[#A2A2A2] font-bold text-xs uppercase">
                      Brand
                    </p>
                  </span>
                  <span>
                    <h2 className="font-bold text-[#191C1F] text-sm sm:text-base">
                      Used
                    </h2>
                    <p className="text-[#A2A2A2] font-bold text-xs uppercase">
                      Resolution
                    </p>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>
                    <h2 className="font-bold text-[#191C1F] text-sm sm:text-base">
                      A264671
                    </h2>
                    <p className="text-[#A2A2A2] font-bold text-xs uppercase">
                      SCREEN SIZE
                    </p>
                  </span>
                  <span className="flex flex-col ">
                    <h2 className="font-bold text-[#191C1F] text-sm sm:text-base">
                      Used
                    </h2>
                    <p className="text-[#A2A2A2] font-bold text-xs uppercase">
                      Category
                    </p>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>
                    <h2 className="font-bold text-[#191C1F] text-sm sm:text-base">
                      A264671
                    </h2>
                    <p className="text-[#A2A2A2] font-bold text-xs uppercase">
                      Color
                    </p>
                  </span>
                </div>
              </article>
              <hr className="bg-[#E4E7E9]" />
              <h2 className="my-2 font-bold uppercase text-sm sm:text-base">
                Description{" "}
              </h2>
              <p className="text-xs sm:text-sm">
                Samsung lu32j590uquxen 32-inch 4k ultra hd 3840 x 2160 led
                monitor - 2xhdmi, display port, black ; display ...
                lu32j590uquxen fl special feature: ultra hd, wall mountable,
                tilt adjustment, flicker-free connectivity technology: 2 x hdmi,
                1 x displayport, 4 x usb 3.0
              </p>
            </div>
          </Card>
        </section>
        <section className="w-full lg:w-1/3">
          <Card>
            <div className="px-1 py-2">
              <p className="text-3xl my-5 justify-center font-bold flex items-center">
                &#8358; 15,000
              </p>
              <span className="flex items-center space-x-1 justify-center">
                <Button
                  // onClick={handleDeleteModal}
                  label="Chat Seller"
                  styles="!text-[#3399FF] w-full rounded border-[1px] border-[#3399FF]"
                  loading={false}
                />{" "}
                <Button
                  onClick={handleModal}
                  label="Make payment"
                  styles="!text-[#ff] rounded w-full bg-[#3399FF]"
                  loading={false}
                />
              </span>
            </div>
          </Card>
          <Card>
            <div className="p-6 flex items-center justify-center flex-col space-y-2">
              <UserIcon />
              <h1 className="text-xl font-bold">Rapheal Emmanuel</h1>
              <span
                onClick={handleToggle}
                className="!text-[#ff] rounded w-full justify-center text-white p-3 bg-[#3399FF] flex items-center space-x-3 cursor-pointer"
              >
                <Phone2 />
                <p> {show ? "Hide" : "Show"} contact</p>
              </span>
            </div>
          </Card>
          {show && (
            <div className=" w-[300px] z-30 -mt-10 flex justify-center mx-auto items-center">
              <Card>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center space-x-2">
                      <Phone />
                      <p className="text-[#3399FF] ">08123462192</p>
                    </span>
                    <span className="cursor-pointer">
                      <Copy />
                    </span>
                  </div>
                  <hr className="my-3" />
                  {contact.map((i) => (
                    <aside className="flex  space-x-2">
                      <span className="size-1 p-0.5 mt-2 bg-black rounded-full" />
                      <p className="text-sm">{i}</p>
                    </aside>
                  ))}
                </div>
              </Card>
            </div>
          )}

          <Card>
            <div className="p-5">
              <h2 className="text-center font-bold my-3">Safety tips</h2>
              {safetyTips.map((i) => (
                <aside className="flex  space-x-2">
                  <span className="size-1 p-0.5 mt-2 bg-black rounded-full" />
                  <p className="text-sm">{i}</p>
                </aside>
              ))}
            </div>
          </Card>
          <Card>
            <div className="p-5">
              <h2 className="text-center font-bold my-3"> Refund Policy</h2>
              {refund.map((i) => (
                <aside className="flex  space-x-2">
                  <span className="size-1 p-0.5 mt-2 bg-black rounded-full" />
                  <p className="text-sm">{i}</p>
                </aside>
              ))}
            </div>
          </Card>
        </section>
      </div>
      <Deals title="Similar Products" data={categories} />
    </>
  );
}
