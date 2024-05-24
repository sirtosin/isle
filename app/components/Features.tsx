import React from "react";
import { GiftIcon, HomeIcon, PhotoIcon, SettingIcon } from "../icons/Social";

export default function Features() {
  return (
    <div className="bg-white shadow-lg rounded p-4 w-[90%]  sm:w-3/4 mx-auto sm:h-[150px]">
      <h2 className="text-center text-2xl font-semibold color">Key Features</h2>
      <div className="sm:flex items-center gap-3 grid grid-cols-2  flex-col sm:flex-row sm:justify-around flex-wrap w-full mx-auto my-5">
        <span className="flex items-center space-x-2">
          <HomeIcon />
          <p className="color text-xl">Home</p>
        </span>
        <span className="flex items-center space-x-2">
          <PhotoIcon />
          <p className="color text-xl">Photo</p>
        </span>
        <span className="flex items-center space-x-2">
          <GiftIcon />
          <p className="color text-xl">Gifting</p>
        </span>
        <span className="flex items-center space-x-2">
          <SettingIcon />
          <p className="color text-xl">Settings</p>
        </span>
      </div>
    </div>
  );
}
