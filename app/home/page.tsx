"use client";
import React, { useState } from "react";
import Header2 from "../components/Header2";
import Card from "../components/Card";
import bg from "@/app/img/dash.png";
import Image from "next/image";
import { Location } from "../icons/Location";
import { QRIcon } from "../icons/Social";
import Countdown from "../components/timer";
import { useAppSelector } from "../redux/hook";
import { useSignUpQuery } from "../hooks/useSignUpQuery";
import SimpleMap from "../components/Map";

export default function page() {
  const [category, setCategory] = useState("address");
  const user = useAppSelector((state) => state.user.user);
  return (
    <div>
      <Header2 />
      <section className="w-full sm:w-3/4 mx-auto p-5 sm:p-10">
        <Card>
          {/* <Countdown targetDate={"June 1, 2024 10:00:00"} /> */}
          <article className="flex items-center justify-center space-y-4 flex-col p-10">
            <h2 className=" font-bold text-2xl text-center">
              WalkTheAisle With Us
            </h2>

            <Image src={bg} className="w-full sm:w-2/3" alt="" />
          </article>
          <article className="p-10">
            <div className="flex items-center w-full sm:w-1/2 mx-auto">
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
              <div className="flex items-center space-x-4 border-[1px] border-[#959595] rounded-md px-5 sm:px-10 py-5 mx-auto mt-5 w-full  sm:w-3/4">
                {/* <Location /> */}
                <SimpleMap />
              </div>
            ) : (
              <>
                <article className="flex flex-col lg:flex-row items-center justify-center">
                  <Card>
                    <div className="w-[300px] p-5">
                      <span className="flex items-center space-x-4">
                        <h2 className="font-semibold text-[#545454]">Name: </h2>
                        <p className="text-sm text-[#0D141C]">{user?.name}</p>
                      </span>
                      <span className="flex items-center space-x-5">
                        <h2 className="font-semibold text-[#545454] text-wrap ">
                          Code:{" "}
                        </h2>
                        <p className="text-sm text-[#0D141C] w-[300px]">
                          {user?.accessCode}
                        </p>
                      </span>
                      <span className="flex items-center space-x-5">
                        <h2 className="font-semibold text-[#545454]">
                          Table:{" "}
                        </h2>
                        <p className="bg-[#810A82] w-max p-1 rounded text-white">
                          {user?.table}
                        </p>
                      </span>
                    </div>
                  </Card>
                  <Card>
                    <div className="flex items-center justify-center p-5">
                      <img
                        src={user?.qrCodeUrl}
                        className="size-32 rounded"
                        alt="qrcode"
                      />
                    </div>
                  </Card>
                </article>
                <div className="flex items-center justify-center">
                  <a
                    className="text-center capitalize font-semibold bg-[#810A82] text-white rounded p-2 w-3/4 "
                    href={user?.qrCodeUrl}
                    download={user?.qrCodeUrl}
                  >
                    download ticket
                  </a>
                </div>
              </>
            )}{" "}
          </article>
        </Card>
      </section>
    </div>
  );
}
