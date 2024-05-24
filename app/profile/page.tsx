import React from "react";
import Header2 from "../components/Header2";
import Card from "../components/Card";
import bg from "../img/profile.png";
import { CameraIcon, SafeGuardIcon } from "../icons/Location";
import Image from "next/image";
import { ArrowRight } from "../icons/Arrow";

export default function page() {
  return (
    <div>
      <Header2 />
      <section className="w-3/4 mx-auto p-10">
        <Card>
          <div className="flex items-center space-y-2 my-10 flex-col  mx-auto">
            <h2 className="font-bold text-[#810A82] text-center text-xl">
              Profile
            </h2>
            <span className="relative">
              <Image src={bg} className="w-full" alt="" />
              <p className="absolute -right-2 top-5">
                <CameraIcon />
              </p>
            </span>
            <p className="font-bold text-[#810A82] text-center">
              Change Picture
            </p>
          </div>
          <article className="mx-auto p-10 w-3/4">
            <h2 className="text-[#4C4D50] font-bold text-xl">
              Check in Status
            </h2>
            <div></div>
            <div>
              <span className="flex flex-col ">
                <h2 className="text-[#ACACAC] text-sm">Name:</h2>
                <p className="font-bold">Rapheal Simon</p>
              </span>
              <span className="flex flex-col ">
                <h2 className="text-[#ACACAC] text-sm">Phone Number:</h2>
                <p className="font-bold">Rapheal Simon</p>
              </span>
              <span className="flex flex-col ">
                <h2 className="text-[#ACACAC] text-sm">Email:</h2>
                <p className="font-bold">Rapheal Simon</p>
              </span>
            </div>
            <div className="flex items-center justify-between border-b-[1px] my-4 border-[#ACACAC] cursor-pointer">
              <aside className="flex space-x-3 items-center">
                <span>
                  <SafeGuardIcon />
                </span>
                <span className="flex flex-col">
                  <h2 className="font-bold text-[#810A82]">Change Password</h2>
                  <p className="text-[#ACACAC] text-sm">secure your account</p>
                </span>
              </aside>
              <p>
                <ArrowRight />
              </p>
            </div>
            <button className="bg-[#FF0000] w-3/4 rounded my-4 px-5 py-2 items-center justify-center text-white mx-auto flex">
              logout
            </button>
          </article>
        </Card>
      </section>
    </div>
  );
}

export const ResetPassword = () => {
  
}