import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#2E002F]/90 text-white py-10  ">
      <Link
        href="/"
        className="text-xl font-bold mb-10 text-white px-8 sm:px-16 cursor-pointer italic"
      >
        Walk The Isle{" "}
      </Link>
      <div className="flex space-y-4 flex-col px-8 sm:px-16 mt-10">
        <Link href="/terms" className="text-[#77878F]">
          Terms and Condition
        </Link>
        <Link href="/privacy" className="text-[#77878F]">
          Privacy Policy
        </Link>
        <Link href="/delete" className="text-[#77878F]">
          Delete Account
        </Link>
      </div>
      <hr className="bg-[#303639] my-5" />
      <p className="text-center my-5 text-[#ADB7BC]">
        &copy; {new Date().getFullYear()} Walk The Isle. All rights reserved
      </p>
    </div>
  );
}
