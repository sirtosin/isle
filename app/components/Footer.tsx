import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full bg-[#191C1F] py-10">
      <Link href="/" className="text-3xl font-bold mb-5 text-white px-8 sm:px-16 cursor-pointer">
        Walk The Isle{" "}
      </Link>
      <div className="flex space-y-4 flex-col px-8 sm:px-16">
        <Link href="/terms" className="text-[#77878F]">
          Terms and Condition
        </Link>
        <Link href="/privacy" className="text-[#77878F]">
          Privacy Policy
        </Link>
        <Link href="/contact" className="text-[#77878F]">
          Contact Us
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
