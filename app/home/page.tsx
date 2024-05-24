'use client'
import React, { useState } from 'react'
import Header2 from '../components/Header2'
import Card from '../components/Card'
import bg from "@/app/img/dash.png";
import Image from 'next/image';
import { Location } from '../icons/Location';
import { QRIcon } from '../icons/Social';

export default function page() {
  const [category, setCategory] = useState('address')

  return (
    <div>
      <Header2 />
      <section className="w-3/4 mx-auto">
        <Card>
          <article className="flex items-center space-x-5 flex-wrap justify-center p-10">
            <div className="flex items-center justify-center flex-col">
              <h2 className="shadow-md rounded py-4 px-8 size-20 m-4 flex text-[#515151] font-semibold text-2xl items-center justify-center ">
                5
              </h2>
              <p className="mb-4 font-semibold">Days</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h2 className="shadow-md rounded py-4 px-8 size-20 m-4 flex text-[#515151] font-semibold text-2xl items-center justify-center ">
                5
              </h2>
              <p className="mb-4 font-semibold">Hours</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h2 className="shadow-md rounded py-4 px-8 size-20 m-4 flex text-[#515151] font-semibold text-2xl items-center justify-center ">
                5
              </h2>
              <p className="mb-4 font-semibold">Minutes</p>
            </div>
            <div className="flex items-center justify-center flex-col">
              <h2 className="shadow-md rounded py-4 px-8 size-20 m-4 flex text-[#515151] font-semibold text-2xl items-center justify-center ">
                5
              </h2>
              <p className="mb-4 font-semibold">Seconds</p>
            </div>
          </article>
          <article className="flex items-center justify-center space-y-4 flex-col p-10">
            <h2 className=" font-bold text-2xl">WalkTheAisle With Us</h2>

            <Image src={bg} className="w-2/3" alt="" />
          </article>
          <article className="p-10">
            <div className="flex items-center  w-1/2 mx-auto">
              <p
                onClick={() => setCategory("address")}
                className={
                  category === "address"
                    ? "font-semibold text-[#810A82] text-center text-xl border-b-2 border-[#810A82] w-[200px]"
                    : "text-[#CBCBCB] cursor-pointer text-center text-xl border-b-2 border-[#CBCBCB] w-[200px]"
                }
              >
                Address
              </p>
              <p
                onClick={() => setCategory("ticket")}
                className={
                  category === "ticket"
                    ? "font-semibold text-[#810A82] text-center text-xl border-b-2 border-[#810A82] w-[200px]"
                    : "text-center text-[#CBCBCB] cursor-pointer text-xl border-b-2 border-[#CBCBCB] w-[200px]"
                }
              >
                Ticket
              </p>
            </div>
            {category === "address" ? (
              <div className="flex items-center space-x-4 border-[1px] border-[#959595] rounded-md px-10 py-5 mx-auto mt-5 w-2/3">
                <Location />
                <p className="font-semibold">
                  Number 17, Fatomi bus stop, Lagos, Nigeria.
                </p>
              </div>
            ) : (
              <article className="flex items-center justify-center">
                <Card>
                  <div className="w-[300px] p-10">
                    <span className="flex items-center space-x-5">
                      <h2 className="font-semibold text-[#545454]">Name: </h2>
                      <p className="text-sm text-[#0D141C]">Adeyemi Remi</p>
                    </span>
                    <span className="flex items-center space-x-5">
                      <h2 className="font-semibold text-[#545454]">Code: </h2>
                      <p className="text-sm text-[#0D141C]">Adey 321</p>
                    </span>
                    <span className="flex items-center space-x-5">
                      <h2 className="font-semibold text-[#545454]">Table: </h2>
                      <p className="bg-[#810A82] w-max p-1 rounded text-white">
                        12{" "}
                      </p>
                    </span>
                  </div>
                </Card>
                <Card>
                  <div className="flex items-center justify-center p-5">
                    <QRIcon />
                  </div>
                </Card>
              </article>
            )}{" "}
          </article>
        </Card>
      </section>
    </div>
  );
}
