import React from "react";
import Footer from "../components/Footer";
import Button from "../components/Button";
import Input from "../components/Input";
import Header from "../components/Header";
import bg3 from "@/app/img/contact.png";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="mt-20 sm:mt-80 bg-white p-5 items-center lg:p-10 flex flex-col-reverse justify-center lg:justify-start space-y-4 lg:space-y-0 lg:flex-row">
      <div className="w-full lg:w-1/2 ">
        <Image src={bg3} className="w-full sm:w-2/3 lg:w-3/4" alt="" />
      </div>
      <div className="mx-auto p-3 sm:p-10 w-full lg:w-1/2 ">
        <h2 className=" font-bold text-2xl my-5 text-[#810A82]">
          {" "}
          Get in Touch
        </h2>
        <p className="w-full sm:w-3/4 my-3">
          Let's get this conversation started. Tell us a bit about yourself, and
          we'll get in touch as soon as we can.
        </p>
        <form className="flex flex-col space-y-4">
          <Input type="text" label="Full Name:" value="" />
          <Input type="phone" label="Phone:" value="" />
          <Input type="email" label="email:" value="" />
          <Input type="text" label="message:" value="" />
          <Button
            loading={false}
            label=" Submit"
            styles="bg-[#810A82] w-full"
          />
        </form>
      </div>
    </div>
  );
}
