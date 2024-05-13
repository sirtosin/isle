import React, { useEffect, useRef, useState } from "react";
import ModalCard from "./modal/Modal";
import { Google, UploadPinIcon } from "../icons/Social";
import Button from "./Button";
import Input from "./Input";
import { ArrowLogin } from "../icons/Arrow";
import pdf from "../../app/img/Pdf.png";
import Image from "next/image";

export default function Account({ handleModal, modalAccount }: any) {
  const [view, setView] = useState(1);
  const [category, setCategory] = useState("");

  const handleSelection = (item: string) => {
    setView(2);
    setCategory(item);
  };

  return (
    <>
      <ModalCard setOpen={handleModal} open={modalAccount}>
        {view === 1 && (
          <>
            <h2 className="font-bold text-center text-xl my-4 capitalize">
              select category
            </h2>
            <div className="flex justify-between items-center">
              <p
                onClick={() => handleSelection("buyer")}
                className="text-[#3399FF] hover:border-2 border-[#3399FF] font-bold bg-[#D4EAFF] p-3 rounded  cursor-pointer size-32 text-center capitalize flex items-center justify-center"
              >
                sign up as buyer
              </p>
              <p
                onClick={() => handleSelection("seller")}
                className="text-[#3399FF] hover:border-2 border-[#3399FF]  font-bold bg-[#D4EAFF] p-3 rounded  cursor-pointer size-32 text-center capitalize flex items-center justify-center"
              >
                sign up as seller
              </p>
            </div>
          </>
        )}
        {view === 2 && <SignUpAsCustomer category={category} />}
      </ModalCard>
    </>
  );
}

export const SignUpAsCustomer = ({ category }: any) => {
  const [signUP, setSignUP] = useState("signup");
  const [view, setView] = useState(1);
  const hiddenFileInput = useRef<null | any>(null);
  const [file, setFile] = useState<null | any>(null);
  const handleClick = (event: React.FormEvent) => {
    hiddenFileInput?.current.click();
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [signUP]);
  return (
    <>
      {signUP === "signup" && (
        <>
          {view === 1 && (
            <>
              <span className="flex flex-col space-y-3 items-center justify-center">
                <h2 className="text-xl font-bold">Create your account</h2>
                <p className="text-[#5F6C72]">
                  Use your social account to create account as a {category}.
                </p>
              </span>
              <p className="w-full border-[1px] shadow-sm rounded-md  flex items-center justify-center px-3 py-1 mt-4 mb-10 border-[#CFCFCF]">
                <Google />
              </p>
              <span className="flex items-center justify-center ">
                <p className=" absolute bg-white">Or continue with</p>
              </span>
              <hr className="bg-[#E4E7E9] " />

              <form className="flex flex-col items-center justify-center space-y-7 w-[320px] sm:w-[400px]  bg-white px-3 py-5 sm:p-5 rounded-xl">
                <div className="w-full flex flex-col space-y-2 mt-10">
                  <Input
                    label="email address"
                    placeholder="email address"
                    name="email"
                    type="email"
                    onChange={() => {}}
                    onBlur={() => {}}
                    value={""}
                  />
                  <Input
                    label="full name"
                    placeholder="john doe"
                    name="fullname"
                    type="text"
                    onChange={() => {}}
                    onBlur={() => {}}
                    value={""}
                  />
                  <Input
                    label="phone number"
                    placeholder="08120801111"
                    name="email"
                    type="number"
                    onChange={() => {}}
                    onBlur={() => {}}
                    value={""}
                  />
                </div>
                <span className="flex items-center w-full space-x-2">
                  <input
                    placeholder=""
                    name="terms"
                    type="checkbox"
                    onChange={() => {}}
                    onBlur={() => {}}
                    value={""}
                    className="accent-blue-500"
                  />
                  <p className="flex items-center text-wrap w-full text-sm">
                    I agree to the
                    <span className="text-[#3399FF] mr-0.5">
                      Terms of Condition
                    </span>
                    and
                    <span className="text-[#3399FF] ml-0.5">
                      
                      Privacy Policy.
                    </span>
                  </p>
                </span>
                <Button
                  icon={<ArrowLogin />}
                  loading={false}
                  label="Continue"
                  styles="bg-[#3399FF] w-full"
                  onClick={() => setView(2)}
                />
                <p
                  onClick={() => setSignUP("signin")}
                  className="text-center text-[#5F6C72] cursor-pointer"
                >
                  Already have an account?{" "}
                  <b className="text-[#3399FF]">Login </b>
                </p>
              </form>
            </>
          )}
          {view === 2 && (
            <>
              <span className="flex flex-col space-y-3 items-center justify-center">
                <h2 className="text-xl font-bold">Create Password</h2>
                <p className="text-[#5F6C72]">
                  Create your unique Password to access your account
                </p>
              </span>
              <div className="font-semibold capitalize flex flex-col space-y-1 w-full">
                <label htmlFor="state" className="text-sm font-medium">
                  state
                </label>
                <select
                  name=""
                  className={`p-2 outline-none rounded-lg ${
                    true
                      ? "border-[1px] border-[#3399FF] text-[#979797] bg-[#EEF6FF]"
                      : "border-[1px] border-gray-300 text-sm"
                  }`}
                >
                  <option value="">select</option>
                  <option value="lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                </select>
              </div>
              <div className="font-semibold capitalize flex flex-col space-y-1 w-full">
                <label htmlFor="lga" className="text-sm font-medium">
                  Local Government (LGA):
                </label>
                <select
                  name=""
                  className={`p-2 outline-none rounded-lg ${
                    true
                      ? "border-[1px] border-[#3399FF] text-[#979797] bg-[#EEF6FF]"
                      : "border-[1px] border-gray-300 text-sm"
                  }`}
                >
                  <option value="">select</option>
                  <option value="lagos">Lagos</option>
                  <option value="Abuja">Abuja</option>
                </select>
              </div>
              <div className="font-semibold capitalize flex flex-col space-y-1 w-full my-3">
                <label htmlFor="idcard" className="text-sm font-medium">
                  Valid Government-Issued Identification (ID Card):
                </label>

                <span
                  style={{
                    width: "auto",
                    border: file?.name ? "1px solid #3399FF" : "1px solid",
                    background: file?.name ? "#EEF6FF" : "#F6F6F6",
                  }}
                  className="px-3 flex items-center space-x-4 !text-[#BABABB] h-[50px] rounded-lg"
                >
                  {file?.name ? (
                    <Image
                      width={24}
                      height={24}
                      src={pdf}
                      className="ml-4"
                      alt="pdf"
                    />
                  ) : (
                    <UploadPinIcon />
                  )}
                  <p
                    onClick={handleClick}
                    style={{
                      color: file?.name ? "#333" : "#BABABB",
                    }}
                    className="cursor-pointer text-sm"
                  >
                    {file?.name
                      ? file?.name
                      : "Upload PDF File (Not more than 3MB)"}
                  </p>
                </span>
                <input
                  onChange={(e: any) => setFile(e.target.files[0])}
                  ref={hiddenFileInput}
                  className="hidden"
                  type="file"
                />
              </div>
              <Button
                icon={<ArrowLogin />}
                loading={false}
                label="Continue"
                styles="bg-[#3399FF] w-full"
                onClick={() => setView(3)}
              />
            </>
          )}
          {view === 3 && (
            <>
              <span className="flex flex-col space-y-3 items-center justify-center">
                <h2 className="text-xl font-bold">Create Password</h2>
                <p className="text-[#5F6C72]">
                  Create your unique Password to access your account
                </p>
              </span>
              <Input
                label="password"
                placeholder="password"
                name="password"
                type="password"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />{" "}
              <Input
                label="confirm password"
                placeholder="password"
                name="password"
                type="password"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />
              <Button
                icon={<ArrowLogin />}
                loading={false}
                label="sign up"
                styles="bg-[#3399FF] w-full"
              />
            </>
          )}
        </>
      )}
      {signUP === "signin" && (
        <SignInAsCustomer setSignUP={setSignUP} category={category} />
      )}
      {signUP === "forgot" && <ForgetPassword setSignUP={setSignUP} />}
    </>
  );
};

export const SignInAsCustomer = ({ setSignUP, category }: any) => (
  <>
    <span className="flex flex-col space-y-3 items-center justify-center">
      <h2 className="text-xl font-bold">Sign in to your account</h2>
      <p className="text-[#5F6C72]">
        Use your social account to log in as a {category}.
      </p>
    </span>
    <p className="w-full border-[1px] shadow-sm rounded-md  flex items-center justify-center px-3 py-1 mt-4 mb-10 border-[#CFCFCF]">
      <Google />
    </p>
    <span className="flex items-center justify-center ">
      <p className=" absolute bg-white">Or continue with</p>
    </span>
    <hr className="bg-[#E4E7E9] " />
    <div className="flex items-center justify-center">
      <form className="flex flex-col items-center justify-center space-y-7 w-[320px] sm:w-[400px]  bg-white px-3 py-5 sm:p-5 rounded-xl">
        <div className="w-full flex flex-col space-y-2 mt-10">
          <Input
            label="email address"
            placeholder="email address"
            name="email"
            type="email"
            onChange={() => {}}
            onBlur={() => {}}
            value={""}
          />
          <div className="flex flex-col ">
            <Input
              label="password"
              placeholder="password"
              name="password"
              type="password"
              onChange={() => {}}
              onBlur={() => {}}
              value={""}
            />
            <p
              onClick={() => setSignUP("forgot")}
              className="text-[#3399FF]  ml-auto capitalize cursor-pointer -mt-2 font-bold"
            >
              forgot password
            </p>
          </div>
        </div>

        <Button
          icon={<ArrowLogin />}
          loading={false}
          label="Login"
          styles="bg-[#3399FF] w-full"
        />
        <p
          onClick={() => setSignUP("signup")}
          className="text-center text-[#5F6C72] cursor-pointer"
        >
          Don’t have account? <b className="text-[#3399FF]">Create Account </b>
        </p>
      </form>
    </div>
  </>
);
export const ForgetPassword = ({ setSignUP }: any) => {
  const length = 6;
  const [view, setView] = useState(1);
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs: any = useRef([]);

  const handleChange = (value: string, index: number) => {
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
  return (
    <>
      {view === 1 && (
        <>
          <span className="flex flex-col space-y-3 items-center justify-center">
            <h2 className="text-xl font-bold">Forget Password</h2>
            <p className="text-[#5F6C72]">
              Enter the email address associated with your account.
            </p>
          </span>
          <div className="flex items-center justify-center">
            <form className="flex flex-col items-center justify-center space-y-7 w-[320px] sm:w-[400px]  bg-white px-3 py-5 sm:p-5 rounded-xl">
              <div className="w-full flex flex-col space-y-2 mt-10">
                <div className="flex flex-col ">
                  <Input
                    label="email address"
                    placeholder="email address"
                    name="email"
                    type="email"
                    onChange={() => {}}
                    onBlur={() => {}}
                    value={""}
                  />
                  <p
                    onClick={() => setSignUP("signin")}
                    className="text-[#3399FF]  ml-auto capitalize cursor-pointer mt-2 font-bold"
                  >
                    Back to Sign-In
                  </p>
                </div>
              </div>

              <Button
                icon={<ArrowLogin />}
                loading={false}
                onClick={() => setView(2)}
                label="SEND CODE"
                styles="bg-[#3399FF] w-full"
              />
              <p className="text-center text-[#5F6C72] cursor-pointer">
                Don’t have account?{" "}
                <b className="text-[#3399FF]">Create Account </b>
              </p>
              <p className="text-center text-[#5F6C72]">
                You may contact Customer Service for help restoring access to
                your account.
              </p>
            </form>
          </div>
        </>
      )}
      {view === 2 && (
        <>
          <span className="flex flex-col space-y-3 items-center justify-center">
            <h2 className="text-xl font-bold">Forget Password</h2>
            <p className="text-[#5F6C72]">
              Please, enter the OTP we just sent to “Simon@gmail.com”
            </p>
          </span>
          <h2 className="font-bold">OTP:</h2>
          {otp?.map((digit, index) => (
            <input
              key={index}
              ref={(ref: any) => (inputRefs.current[index] = ref)}
              maxLength={1}
              type="text"
              value={digit}
              className="size-12 m-2 border-[1px] border-[#E4E7E9] p-2 rounded text-center "
              onChange={(e: any) => handleChange(e.target.value, index)}
              onKeyDown={(event) => handleKeyPress(event, index)}
            />
          ))}
          <Button
            icon={<ArrowLogin />}
            loading={false}
            onClick={() => setView(3)}
            label="Verify"
            styles="bg-[#3399FF] w-full"
          />
        </>
      )}
      {view === 3 && (
        <>
          <span className="flex flex-col space-y-3 items-center justify-center">
            <h2 className="text-xl font-bold">Reset Password</h2>
            <p className="text-[#5F6C72]">
              Create your unique Password to access your account
            </p>
          </span>
          <Input
            label="password"
            placeholder="password"
            name="password"
            type="password"
            onChange={() => {}}
            onBlur={() => {}}
            value={""}
          />{" "}
          <Input
            label="confirm password"
            placeholder="password"
            name="password"
            type="password"
            onChange={() => {}}
            onBlur={() => {}}
            value={""}
          />
          <Button
            icon={<ArrowLogin />}
            loading={false}
            label="Submit"
            styles="bg-[#3399FF] w-full"
          />
        </>
      )}
    </>
  );
};
