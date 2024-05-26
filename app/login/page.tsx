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
import {
  BackIcon2,
  DownloadIcon2,
  HurrayIcon,
  IsleIcon,
  QRIcon,
} from "../icons/Social";
import ModalCard from "../components/modal/Modal";
import Card from "../components/Card";
import Link from "next/link";
import { useLoginQuery } from "../hooks/useLoginQuery";

export default function page() {
  const {
    getOtp,
    handleSubmit,
    errors,
    values,
    handleBlur,
    handleChange,
    isSubmitting,
    otp,
    modal,
    setModal,
    setOtp,
    view,
    setView,
    loading,
    validateOtp,
    length,
    loading2,
  } = useLoginQuery();
  const inputRefs: any = useRef([]);
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
      inputRefs?.current[index - 1]?.focus();
    }
  };
  useEffect(() => {
    view === 1 && inputRefs?.current[0]?.focus();
  }, [view]);
  const handleOtp = (e: any) => {
    e.preventDefault();
    if (!values.phone) {
      Toast({ title: "Fill All Fields", error: true });
      return;
    }
    getOtp();
  };
  const [seconds, setSeconds] = useState(90); // 1:30 minutes in second9
  useEffect(() => {
    if (view === 1) {
      const interval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [seconds, view]);
  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };
  return (
    <div className="flex overflow-hidden h-screen ">
      {modal && (
        <ModalCard setOpen={handleModal} open={modal}>
          <Hurray />
        </ModalCard>
      )}
      <div className="hidden lg:flex lg:w-1/2">
        <Image src={bg3} className="w-full" alt="" />
      </div>
      <div className="w-full items-center justify-center lg:w-1/2 p-5 relative overflow-y-scroll h-screen bg-white">
        <Link className="flex lg:hidden my-5" href="/">
          <IsleIcon />
        </Link>
        {view === 0 && (
          <>
            <h2 className="text-center font-bold text-3xl mb-2">
              Log in to Our Wedding App
            </h2>
            <span className="space-y-1 flex flex-col items-center justify-center">
              <p className="text-[#656565] text-center sm:text-justify">
                Join our celebration and access exclusive content
              </p>
            </span>

            <form className="flex flex-col space-y-4 items-center justify-center w-full sm:w-3/4 mx-auto my-10">
              <Input
                type="number"
                name="phone"
                onChange={handleChange}
                onBlur={handleBlur}
                label="Phone Number:"
                value={values.phone}
              />
              {errors.phone ? (
                <b className="text-xs text-red-700 italic">{errors.phone}</b>
              ) : null}
              <Input
                type="password"
                label="password:"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                name="password"
              />
              {errors.password ? (
                <b className="text-xs text-red-700 italic">{errors.password}</b>
              ) : null}
              <small
                onClick={() => setView(3)}
                className="!mt-0  ml-auto cursor-pointer font-semibold"
              >
                Forgot Password?
              </small>
              <Button
                loading={isSubmitting}
                label="Continue"
                onClick={handleSubmit}
                styles="bg-[#810A82]  w-full"
              />
              <Link href="/register" className="text-center">
                Don’t have an account?
                <b className="text-[#810A82] ml-2">Register</b>{" "}
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
            <div className="my-10 mx-auto flex flex-col space-y-5 items-center justify-center sm:w-3/4 lg:w-1/2 w-full">
              <span>
                <h2 className="text-3xl font-bold">Verify Your Account</h2>
                <p className="text-[#656565]">
                  Enter the 6 digit OTP sent to your phone and email
                </p>
              </span>
              <h2 className="font-bold">OTP Input:</h2>
              <div className="flex items-center space-x-2">
                {otp?.map((digit, index) => (
                  <input
                    key={index}
                    ref={(ref: any) => (inputRefs.current[index] = ref)}
                    maxLength={1}
                    type="number"
                    value={digit}
                    className="size-12 m-2 border-[1px] border-[#E4E7E9] p-2 rounded text-center "
                    onChange={(e: any) =>
                      handleInputChange(e.target.value, index)
                    }
                    onKeyDown={(event) => handleKeyPress(event, index)}
                  />
                ))}
              </div>
              <aside className="w-full flex items-center justify-between">
                <p>{formatTime(seconds)}</p>
                <small
                  onClick={seconds !== 0 ? () => {} : handleOtp}
                  className="!mt-0  ml-auto cursor-pointer font-semibold"
                >
                  Don’t receive OTP? Resend OTP
                </small>
              </aside>
              <Button
                loading={loading}
                onClick={validateOtp}
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
            <div className="my-10  mx-auto flex flex-col space-y-5 items-center justify-center w-full">
              <span className="sm:px-10">
                <h2 className="text-3xl font-bold">Reset Password</h2>
                <p className="text-[#656565]">
                  Reset your unique password to access your account to carry out
                  your daily activities.
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
                  value={values.cpassword}
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
        {view === 3 && (
          <>
            <p
              onClick={() => setView(0)}
              className="border-[1px] w-max px-3 py-1 border-gray-100 rounded-md"
            >
              <BackIcon2 />
            </p>
            <div className="my-10 mx-auto flex flex-col space-y-5 items-center justify-center w-full">
              <span>
                <h2 className="text-3xl font-bold">Forget Password </h2>
                <p className="text-[#656565]">
                  Don’t worry! it occurs. Kindly enter your registered phone
                  number.
                </p>
              </span>
              <div className="w-full sm:w-3/4 mx-auto">
                <Input
                  type="number"
                  label="Phone Number"
                  name="phone"
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.phone ? (
                  <b className="text-xs text-red-700 italic">{errors.phone}</b>
                ) : null}

                <Button
                  icon={<ArrowLogin />}
                  loading={loading2}
                  onClick={handleOtp}
                  label="continue"
                  styles="bg-[#810A82] w-full  my-5"
                />
                <Link
                  href="/register"
                  className="flex items-center justify-center"
                >
                  Don’t have an account?
                  <b className="text-[#810A82] ml-2">Register</b>{" "}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export const Hurray = () => (
  <div>
    <span className="flex items-center justify-center">
      <HurrayIcon />
    </span>
    <span className="my-5 flex flex-col space-y-1 items-center justify-center">
      <h2 className="font-bold text-2xl">Congratulations! 🎉</h2>
      <p className="text-center ">Your password reset is complete.</p>
    </span>
    <div className=" cursor-pointer w-full bg-[#810A82] py-2 px-4 items-center justify-center flex rounded">
      <p className="mx-auto  text-white">Log in Now</p>
    </div>
  </div>
);
