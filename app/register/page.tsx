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
import { useAppSelector } from "../redux/hook";

export default function page() {
  const {
    getOtp,
    handleSubmit,
    errors,
    values,
    handleBlur,
    handleChange,
    isSubmitting,
    tables,
    setView,
    view,
    validateOtp,
    loading,
    setOtp,
    otp,
    length,
    setModal,
    modal,
    loading2,
    setSeconds,
    seconds,
    code,
    setCode,
  } = useSignUpQuery();

  const inputRefs: any = useRef([]);
  const user = useAppSelector((state) => state.user.user);
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
    view === 1 && inputRefs?.current[0]?.focus();
  }, [view]);
  const handleOtp = (e: any) => {
    e.preventDefault();
    if (
      !values.name ||
      !values.email ||
      !values.phone ||
      !values.table ||
      !code
    ) {
      Toast({ title: "Fill All Fields", error: true });
      return;
    }
    if (code !== "Itsforever") {
      Toast({ title: "invalid invitation code", error: true });
      return;
    }
    getOtp();
  };
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
    <div className="flex overflow-hidden h-screen">
      {modal && (
        <ModalCard setOpen={handleModal} open={modal}>
          <Hurray user={user} />
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
                placeholder="Itsforever"
                onChange={(e) => setCode(e.target.value)}
                value={code}
              />
              <select
                className={`p-2 outline-none rounded w-full ${
                  values.table
                    ? "border-[1px] border-[#810A82] "
                    : "border-[1px] border-gray-300 text-sm text-[#979797] bg-[#EEF6FF]"
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.table}
                name="table"
              >
                <option value="">select table</option>
                {tables.map((item: any) => (
                  <option value={item?.alias}>{item?.name}</option>
                ))}
              </select>
              <Button
                loading={loading2}
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
            <div className="my-10 mx-auto flex flex-col space-y-5 items-center justify-center sm:w-3/4 lg:w-1/2 w-full">
              <span>
                <h2 className="text-3xl font-bold">Verify Your Account</h2>
                <p className="text-[#656565]">
                  Enter the 6 digit OTP sent to your phone and email
                </p>
              </span>
              <h2 className="font-bold">OTP:</h2>
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
      </div>
    </div>
  );
}

export const Hurray = ({ user }: any) => (
  <div>
    <span className="flex items-center justify-center">
      <HurrayIcon />
    </span>
    <span className="flex flex-col space-y-1 items-center justify-center">
      <h2 className="font-bold text-2xl">Congratulations! 🎉</h2>
      <p>You're now part of our wedding celebration</p>
    </span>
    <article className="flex flex-col sm:flex-row items-center justify-center">
      <Card>
        <div className="w-[300px] p-5">
          <span className="flex items-center space-x-4">
            <h2 className="font-semibold text-[#545454]">Name: </h2>
            <p className="text-sm text-[#0D141C]">{user?.name}</p>
          </span>
          <span className="flex items-center space-x-5">
            <h2 className="font-semibold text-[#545454] text-wrap ">Code: </h2>
            <p className="text-sm text-[#0D141C] w-[300px]">
              {user?.inviteCode ?? user?.accessCode ?? ""}
            </p>
          </span>
          <span className="flex items-center space-x-5">
            <h2 className="font-semibold text-[#545454]">Table: </h2>
            <p className="bg-[#810A82] w-max p-1 rounded text-white">
              {user?.tableId}
            </p>
          </span>
        </div>
      </Card>
      <Card>
        <div className="flex items-center justify-center p-5">
          <img src={user?.qrCodeUrl} className="size-32 rounded" alt="qrcode" />
        </div>
      </Card>
    </article>
    <article className="flex items-center w-full justify-between ">
      <div className="cursor-pointer border-[1px] w-max border-[#810A82] rounded px-10 items-center justify-center flex py-2 ">
        <DownloadIcon2 />
      </div>
      <div className="cursor-pointer w-2/3 bg-[#810A82] py-2 px-4 items-center justify-center flex rounded">
        <Link href="/login" className="mx-auto  text-white">
          Log in Now
        </Link>
      </div>
    </article>
  </div>
);
