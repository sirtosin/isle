import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#2E002F] text-white p-5 sm:p-10  "> 
      <span className="flex flex-col">
        <h2 className="text-3xl text-bold text-white cursor-pointer ">
          Walk The Isle{" "}
        </h2>
        <p>Absolutely, I'm ready to collaborate with you. Let's get started!</p>
      </span>
      <hr className="bg-white my-5" />

      <div className="flex space-y-4 sm:items-center justify-start flex-col sm:px-16 sm:flex-row sm:justify-between">
        <Link href="/terms" className="">
          Terms and Condition
        </Link>
        <Link href="/privacy" className="">
          Privacy Policy
        </Link>
        <Link href="/delete" className="">
          Delete Account
        </Link>
      </div>
      <p className="text-center my-5">
        &copy; {new Date().getFullYear()} Walk The Isle. All rights reserved
      </p>
    </div>
  );
}
