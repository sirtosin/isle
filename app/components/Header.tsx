"use client";
import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { SearchField } from "./Search";
import { PenIcon } from "../icons/Edit";
import ArrowDown from "../icons/ArrowDown";
import Account from "./Account";
import { EmailIcon, OrderIcon, UserIcon } from "../icons/Social";
import Link from "next/link";

export default function Header() {
  const [modalAccount, setModalAccount] = useState(false);
  const [account, setAccount] = useState(true);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);
  const handleModal = () => setModalAccount((prev) => !prev);
  const handleLogout = () => setAccount((prev) => !prev);

  return (
    <header className="sticky top-0 left-0 z-50">
      {modalAccount && (
        <Account modalAccount={modalAccount} handleModal={handleModal} />
      )}
      <div className="w-full bg-[#D4EAFF] p-3 ">
        <p className="bg-[#FF9333] px-10 py-2 rounded-lg w-max ml-auto mr-20 text-white">
          Sell
        </p>
      </div>
      <nav className="hidden lg:flex items-center justify-around h-[80px] shadow-sm bg-white">
        <div>
          <Link href="/" className="flex text-4xl font-semibold">
            LOGO
          </Link>
        </div>
        <div className="flex space-x-3 items-center">
          <SearchField
            inputText={""}
            setInputText={() => {}}
            disabled={false}
          />
          <Button
            // onClick={handleDeleteModal}
            label="Search"
            styles="!text-[#ff] rounded-lg mx-auto bg-[#3399FF]"
            loading={false}
          />
        </div>
        <div className="flex space-x-10 items-center">
          <span className="flex space-x-3 items-center cursor-pointer">
            <PenIcon />
            <p>Help</p>
          </span>
          {account ? (
            <div
              onMouseEnter={handleToggle}
              onMouseLeave={handleToggle}
              className="relative h-max w-max"
            >
              <span
                onClick={handleModal}
                className="flex space-x-3 items-center cursor-pointer"
              >
                <UserIcon />
                <p> Joh Doe</p>
              </span>
              {toggle ? (
                <article className=" absolute !z-50 -ml-10 flex  w-max flex-col items-center space-y-3 rounded-md bg-white p-4 shadow-2xl">
                  <Link
                    href="/profile"
                    className="color cursor-pointer text-sm font-semibold flex items-center w-full"
                  >
                    <UserIcon />
                    <p className="ml-2">My Account</p>
                  </Link>
                  <span className="color cursor-pointer text-sm font-semibold flex items-center w-full">
                    <EmailIcon /> <p className="ml-2"> Inbox</p>
                  </span>
                  <Link
                    href="/orders"
                    className="color cursor-pointer text-sm font-semibold flex items-center w-full"
                  >
                    <OrderIcon /> <p className="ml-2"> Orders</p>
                  </Link>

                  <hr className="bg-[#B9B9B9] w-full" />
                  <p
                    onClick={handleLogout}
                    className="text-[#FF0000] cursor-pointer"
                  >
                    Logout
                  </p>
                </article>
              ) : null}
            </div>
          ) : (
            <span
              onClick={handleModal}
              className="flex space-x-3 items-center cursor-pointer"
            >
              <p>Account</p>
              <ArrowDown />
            </span>
          )}
        </div>
      </nav>
      {/* mobile */}
      <nav className="flex items-center justify-between px-10 h-[80px] shadow-sm bg-white lg:hidden">
        <div>
          <Link href="/" className="flex text-4xl font-semibold">
            LOGO
          </Link>
        </div>
        <aside className="flex items-center justify-around w-full">
          <div className=" items-center space-x-2 hidden sm:flex">
            <SearchField
              inputText={""}
              setInputText={() => {}}
              disabled={false}
            />
            <Button
              // onClick={handleDeleteModal}
              label="Search"
              styles="!text-[#ff] rounded-lg mx-auto bg-[#3399FF]"
              loading={false}
            />
          </div>
          <div className="flex items-center">
            {/* <span className="flex space-x-3 items-center cursor-pointer">
              <PenIcon />
              <p>Help</p>
            </span> */}
            {account ? (
              <div
                onMouseEnter={handleToggle}
                onMouseLeave={handleToggle}
                className="relative h-max w-max"
              >
                <span
                  onClick={handleModal}
                  className="flex space-x-3 items-center cursor-pointer"
                >
                  <UserIcon />
                  <p> Joh Doe</p>
                </span>
                {toggle ? (
                  <article className=" absolute !z-50 -ml-10 flex  w-max flex-col items-center space-y-3 rounded-md bg-white p-4 shadow-2xl">
                    <Link
                      href="/profile"
                      className="color cursor-pointer text-sm font-semibold flex items-center w-full"
                    >
                      <UserIcon />
                      <p className="ml-2">My Account</p>
                    </Link>
                    <span className="color cursor-pointer text-sm font-semibold flex items-center w-full">
                      <EmailIcon /> <p className="ml-2"> Inbox</p>
                    </span>
                    <Link
                      href="/orders"
                      className="color cursor-pointer text-sm font-semibold flex items-center w-full"
                    >
                      <OrderIcon /> <p className="ml-2"> Orders</p>
                    </Link>

                    <hr className="bg-[#B9B9B9] w-full" />
                    <p onClick={handleLogout} className="text-[#FF0000] cursor-pointer">
                      Logout
                    </p>
                  </article>
                ) : null}
              </div>
            ) : (
              <span
                onClick={handleModal}
                className="flex space-x-3 items-center cursor-pointer"
              >
                <p>Account</p>
                <ArrowDown />
              </span>
            )}
          </div>
        </aside>
      </nav>
    </header>
  );
}
