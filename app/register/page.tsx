"use client";
import React, { useEffect, useRef, useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";
import Footer from "../components/Footer";
import bg3 from "@/app/img/signup.png";
import { useSignUpQuery } from "../hooks/useSignUpQuery";
import { ArrowLogin } from "../icons/Arrow";
import { Toast } from "../components/Toast";
import Image from "next/image";
import { BackIcon2, DownloadIcon2, HurrayIcon, IsleIcon, QRIcon } from "../icons/Social";
import ModalCard from "../components/modal/Modal";
import Card from "../components/Card";
import Link from "next/link";

export default function page() {
  const {
    getOtp,
    handleSubmit,
    errors,
    values,
    handleBlur,
    handleChange,
    isSubmitting,
  } = useSignUpQuery();
  const length = 6;

  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs: any = useRef([]);
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal((prev) => !prev);
  const handleInputChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    // Move to the next input field
    if (value !== "" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    // Move to the previous input field on Backspace
    if (
      event.nativeEvent.key === "Backspace" &&
      index > 0 &&
      otp[index] === ""
    ) {
      inputRefs.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  const [view, setView] = useState(0);
  const handleOtp = (e: any) => {
    e.preventDefault();
    if (!values.code || !values.email || !values.phone) {
      Toast({ title: "Fill All Fields", error: true });
      return;
    }
    setView(1);
    getOtp();
  };
  return (
    <div className="flex overflow-hidden h-screen">
      {modal && (
        <ModalCard setOpen={handleModal} open={modal}>
          <Hurray />
        </ModalCard>
      )}
      <div className="hidden lg:flex lg:w-1/2">
        <Image src={bg3} className="w-full" alt="" />
      </div>
      <div className="w-full lg:w-1/2 p-5 relative overflow-y-scroll bg-white">
        <Link className="flex lg:hidden my-5" href="/">
          <IsleIcon />
        </Link>
        {view === 0 && (
          <>
            <h2 className="text-center font-bold text-3xl mb-2">
              {" "}
              WalkTheAisle with us
            </h2>
            <span className="space-y-1 flex flex-col items-center justify-center">
              <p className="text-[#656565]">
                Register now and be a part of our special day
              </p>
              <small className="text-[#656565]">
                (Kindly provide, a valid Phone Number and Email Address)
              </small>
            </span>

            <form className="flex flex-col space-y-4 items-center justify-center w-full sm:w-3/4 mx-auto my-10">
              <Input
                type="name"
                label="Full Name"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name ? (
                <b className="text-xs text-red-700 italic">{errors.name}</b>
              ) : null}
              <Input
                type="phone"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                label="Phone:"
                value={values.phone}
              />
              {errors.phone ? (
                <b className="text-xs text-red-700 italic">{errors.phone}</b>
              ) : null}
              <Input
                type="email"
                label="email:"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                name="email"
              />
              {errors.email ? (
                <b className="text-xs text-red-700 italic">{errors.email}</b>
              ) : null}
              <Input
                type="text"
                label="invitation code:"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.code}
                name="code"
              />
              {errors.code ? (
                <b className="text-xs text-red-700 italic">{errors.code}</b>
              ) : null}
              <select
                className={`p-2 outline-none rounded w-full ${
                  true
                    ? "border-[1px] border-[#810A82] text-[#979797] bg-[#EEF6FF]"
                    : "border-[1px] border-gray-300 text-sm"
                }`}
                name=""
                id=""
              >
                <option value="">select table</option>
                <option value="groom">groom</option>
              </select>
              <Button
                loading={false}
                label="Continue"
                onClick={handleOtp}
                styles="bg-[#810A82]  w-full"
              />
              <Link href="/login" className="text-center">
                Already have an account?{" "}
                <b className="text-[#810A82]">Log In</b>{" "}
              </Link>
            </form>
          </>
        )}
        {view === 1 && (
          <>
            <p
              onClick={() => setView(0)}
              className="border-[1px] w-max px-3 py-1 border-gray-100 rounded-md"
            >
              <BackIcon2 />
            </p>
            <div className="my-10 mx-auto flex flex-col space-y-5 items-center justify-center lg:w-1/2 w-full">
              <span>
                <h2 className="text-3xl font-bold">Verify Your Account</h2>
                <p className="text-[#656565]">
                  Please, enter the OTP we just sent to “{values.email}”
                </p>
              </span>
              <h2 className="font-bold">OTP:</h2>
              <div className="flex items-center space-x-2">
                {otp?.map((digit, index) => (
                  <input
                    key={index}
                    ref={(ref: any) => (inputRefs.current[index] = ref)}
                    maxLength={1}
                    type="text"
                    value={digit}
                    className="size-12 m-2 border-[1px] border-[#E4E7E9] p-2 rounded text-center "
                    onChange={(e: any) =>
                      handleInputChange(e.target.value, index)
                    }
                    onKeyDown={(event) => handleKeyPress(event, index)}
                  />
                ))}
              </div>
              <small className="!mt-0  ml-auto cursor-pointer font-semibold">
                Don’t receive OTP? Resend OTP
              </small>
              <Button
                loading={isSubmitting}
                onClick={() => setView(2)}
                label="Verify"
                styles="bg-[#810A82] w-3/4"
              />
            </div>
          </>
        )}
        {view === 2 && (
          <>
            <p
              onClick={() => setView(1)}
              className="border-[1px] w-max px-3 py-1 border-gray-100 rounded-md"
            >
              <BackIcon2 />
            </p>
            <div className="my-10 mx-auto flex flex-col space-y-5 items-center justify-center w-full">
              <span>
                <h2 className="text-3xl font-bold">Create Your Password</h2>
                <p className="text-[#656565]">
                  Secure your account with a strong password
                </p>
              </span>
              <div className="w-full sm:w-3/4 mx-auto">
                <Input
                  type="password"
                  label="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.password ? (
                  <b className="text-xs text-red-700 italic">
                    {errors.password}
                  </b>
                ) : null}
                <Input
                  type="password"
                  label="confirm Password"
                  name="cpassword"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.cpassword ? (
                  <b className="text-xs text-red-700 italic">
                    {errors.cpassword}
                  </b>
                ) : null}

                <Button
                  icon={<ArrowLogin />}
                  loading={isSubmitting}
                  onClick={handleSubmit}
                  label="continue"
                  styles="bg-[#810A82] w-full"
                />
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export const Hurray = () => (
  <div >
    <span className="flex items-center justify-center">
      <HurrayIcon />
    </span>
    <span className="flex flex-col space-y-1 items-center justify-center">
      <h2 className="font-bold text-2xl">Congratulations! 🎉</h2>
      <p>You're now part of our wedding celebration</p>
    </span>
    <article className="flex">
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
            <p className="bg-[#810A82] w-max p-1 rounded text-white">12 </p>
          </span>
        </div>
      </Card>
      <Card>
        <div className="flex items-center justify-center p-5">
          <QRIcon />
        </div>
      </Card>
    </article>
    <article className="flex items-center w-full justify-between ">
      <div className="cursor-pointer border-[1px] w-max border-[#810A82] rounded px-10 items-center justify-center flex py-2 ">
        <DownloadIcon2 />
      </div>
      <div className="cursor-pointer w-2/3 bg-[#810A82] py-2 px-4 items-center justify-center flex rounded">
        <Link href='/login' className="mx-auto  text-white">Log in Now</Link>
      </div>
    </article>
  </div>
);
