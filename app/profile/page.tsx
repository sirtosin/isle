"use client";
import React, { useRef, useState } from "react";
import Header2 from "../components/Header2";
import Card from "../components/Card";
import bg from "../img/profile.png";
import { CameraIcon, SafeGuardIcon } from "../icons/Location";
import Image from "next/image";
import { ArrowLogin, ArrowRight } from "../icons/Arrow";
import Button from "../components/Button";
import { BackIcon2 } from "../icons/Social";
import Input from "../components/Input";
import { useSignUpQuery } from "../hooks/useSignUpQuery";

export default function page() {
  const [view, setView] = useState(0);
  const {
    getOtp,
    handleSubmit,
    errors,
    values,
    handleBlur,
    handleChange,
    isSubmitting,
  } = useSignUpQuery();
  const hiddenFileInput = useRef<null | any>(null);
  const [file, setFile] = useState<null | any>(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleClick = (event: React.FormEvent) => {
    hiddenFileInput?.current.click();
  };

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(file);
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <Header2 />
      <section className="w-full sm:w-3/4 mx-auto p-5 sm:p-10">
        <Card>
          {view === 0 && (
            <>
              <div className="flex items-center space-y-2 my-10 flex-col  mx-auto">
                <h2 className="font-bold text-[#810A82] text-center text-xl">
                  Profile
                </h2>
                <span className="relative">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      className="size-16 object-cover rounded-full"
                      alt=""
                    />
                  ) : (
                    <Image
                      src={bg}
                      className="w-full"
                      alt=""
                    />
                  )}
                  <p className="absolute -right-2 top-5">
                    <CameraIcon />
                  </p>
                </span>
                <p
                  onClick={handleClick}
                  className="font-bold text-[#810A82] text-center"
                >
                  Change Picture
                </p>
                <input
                  onChange={handleImageUpload}
                  ref={hiddenFileInput}
                  accept="image/*"
                  className="hidden"
                  type="file"
                />
              </div>
              <article className="mx-auto p-5 sm:p-10 w-full sm:w-3/4">
                <h2 className="text-[#4C4D50] font-bold text-xl">
                  Check in Status
                </h2>
                <div className="flex my-4">
                  <span>
                    <aside className="flex items-center my-3 w-full">
                      <div className="w-1 bg-[#810A82] p-1 rounded-full" />
                      <div className="w-[120px] sm:w-[200px] h-1  bg-[#810A82]" />
                      <div className="w-1 bg-[#810A82] p-1 rounded-full" />
                      <div className="w-[120px] sm:w-[200px] h-1  bg-[#D5C6D5]" />
                      <div className="w-1 bg-[#810A82] p-1 rounded-full" />
                    </aside>
                    <aside className="flex items-center my-3 justify-between w-full">
                      <p>Invited</p>
                      <p>Registered</p>
                      <p>Checked-In</p>
                    </aside>
                  </span>
                </div>
                <div className="flex flex-col space-y-3">
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
                <div
                  onClick={() => setView(1)}
                  className="flex items-center justify-between border-b-[1px] my-4 border-[#ACACAC] cursor-pointer"
                >
                  <aside className="flex space-x-3 items-center">
                    <span>
                      <SafeGuardIcon />
                    </span>
                    <span className="flex flex-col">
                      <h2 className="font-bold text-[#810A82]">
                        Change Password
                      </h2>
                      <p className="text-[#ACACAC] text-sm">
                        secure your account
                      </p>
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
            </>
          )}
          {view === 1 && (
            <>
              <ResetPassword
                errors={errors}
                values={values}
                setView={setView}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                handleChange={handleChange}
                handleBlur={handleBlur}
              />
            </>
          )}
        </Card>
      </section>
    </div>
  );
}

export const ResetPassword = ({
  errors,
  values,
  setView,
  handleChange,
  handleBlur,
  isSubmitting,
  handleSubmit,
}: any) => (
  <>
    <p
      onClick={() => setView(0)}
      className="border-[1px] w-max px-3 py-1 border-gray-100 rounded-md m-10"
    >
      <BackIcon2 />
    </p>
    <div className="my-10  mx-auto flex flex-col space-y-5 items-center justify-center w-full sm:w-2/3 p-5">
      <span className="px-5 sm:px-10">
        <h2 className="text-3xl font-bold text-center">Reset Password</h2>
        <p className="text-[#656565]">
          Your password secures your access into your account. It is important
          that you do not share this password with anyone.
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
          <b className="text-xs text-red-700 italic">{errors.password}</b>
        ) : null}
        <Input
          type="password"
          label="New Password"
          name="npassword"
          value={values.npassword}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.npassword ? (
          <b className="text-xs text-red-700 italic">{errors.npassword}</b>
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
          <b className="text-xs text-red-700 italic">{errors.cpassword}</b>
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
);
