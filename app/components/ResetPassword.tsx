"use client";
import React, { useState } from "react";
import Input from "./Input";
import { Checkedbox, UnCheckedbox } from "../icons/Social";
import Button from "./Button";
import ModalCard from "./modal/Modal";

export default function ResetPassword({ deleteModal, handleDeleteModal }: any) {
  const [small, setSmall] = useState(false);
  const [big, setBig] = useState(false);
  const [special, setSpecial] = useState(false);
  const [number, setNumber] = useState(false);

  const handleChange2 = (event: any) => {
    const value = event.target.value;

    // Check for special characters
    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(value);

    // Check for capital letters
    const hasCapitalLetter = /[A-Z]/.test(value);

    // Check for small letters
    const hasSmallLetter = /[a-z]/.test(value);

    // Check for numbers
    const hasNumber = /[0-9]/.test(value);
    // setPassword(value);

    // Handle the conditions as needed
    if (value.length < 8) {
      console.log("Special character detected");
      setSpecial(true);
    }

    if (hasCapitalLetter) {
      console.log("Capital letter detected");
      setBig(true);
    }

    if (hasSmallLetter) {
      console.log("Small letter detected");
      setSmall(true);
    }

    if (hasNumber) {
      console.log("Number detected");
      setNumber(true);
    }
  };

  return (
    <ModalCard setOpen={handleDeleteModal} open={deleteModal}>
      <h2 className="text-center font-bold my-3 text-xl">Password Reset</h2>
      <Input
        label="old password"
        placeholder="old password"
        name="password"
        type="password"
        onChange={() => {}}
        onBlur={() => {}}
        value={""}
      />{" "}
      <Input
        label="new password"
        placeholder=" new password"
        name="password"
        type="password"
        onChange={handleChange2}
        onBlur={() => {}}
        value={""}
      />{" "}
      <Input
        label="confirm new password"
        placeholder=" confirm new password"
        name="password"
        type="password"
        onChange={() => {}}
        onBlur={() => {}}
        value={""}
      />
      <p className="text-[#767676] font-bold">Password Must:</p>
      <div className="my-3">
        <span className="flex items-center space-x-2">
          {special ? <Checkedbox /> : <UnCheckedbox />}
          <p>Contain at least 8 characters</p>
        </span>
        <span className="flex items-center space-x-2">
          {number ? <Checkedbox /> : <UnCheckedbox />}
          <p>Contain at least one number</p>
        </span>
        <span className="flex items-center space-x-2">
          {small && big ? <Checkedbox /> : <UnCheckedbox />}
          <p>Contain at least one uppercase letter and one lowercase letter</p>
        </span>
      </div>
      <Button
        loading={false}
        label="Update Password"
        styles="bg-[#3399FF] w-full"
      />
    </ModalCard>
  );
}
