"use client";
import React, { useEffect, useState } from "react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import ArrowDown from "../icons/ArrowDown";
import Account from "./Account";
import {
  EditIcon,
  EmailIcon,
  GiftIcon2,
  GiftIcon22,
  HomeIcon2,
  HomeIcon22,
  IsleIcon,
  OrderIcon,
  PhotoIcon2,
  PhotoIcon22,
  ProfileIcon2,
  UserIcon,
} from "../icons/Social";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useAppSelector } from "../redux/hook";

export default function Header2() {
  const user = useAppSelector((state) => state.user.user);
  const navigate = useRouter();
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle((prev) => !prev);
  const pathname = usePathname();
  const activePath = pathname?.replace("/", "");
  useEffect(() => {
    !user?.name && navigate.push("/login");
  }, [user?.name]);
  return (
    <header className="sticky top-0 left-0 z-50 bg-white border-b-[1px] border-white flex items-center justify-between lg:justify-around px-10">
      <div>
        <Link href="/" className="">
          <IsleIcon />
        </Link>
      </div>
      <nav className="hidden lg:flex items-center justify-between h-[80px] shadow-sm px-20">
        <div className="flex space-x-10 items-center">
          <Link
            href="/home"
            className={
              activePath === "home"
                ? "cursor-pointer text-[#810A82] flex space-x-2 items-center"
                : "cursor-pointer text-[#AFAFAF] flex space-x-2 items-center"
            }
          >
            {activePath === "home" ? <HomeIcon2 /> : <HomeIcon22 />}
            <p>Home</p>
          </Link>

          <Link
            href="/photos"
            className={
              activePath === "photos"
                ? "cursor-pointer text-[#810A82] flex space-x-2 items-center"
                : "cursor-pointer text-[#AFAFAF] flex space-x-2 items-center"
            }
          >
            {activePath === "photos" ? <PhotoIcon22 /> : <PhotoIcon2 />}
            <p>Photo</p>
          </Link>

          <Link
            href="/gift"
            className={
              activePath === "gift"
                ? "cursor-pointer text-[#810A82] flex space-x-2 items-center"
                : "cursor-pointer text-[#AFAFAF] flex space-x-2 items-center"
            }
          >
            {/*  */}
            {activePath === "gift" ? <GiftIcon2 /> : <GiftIcon22 />}
            <p>Gift</p>
          </Link>
        </div>
      </nav>
      <Link
        href="/profile"
        className={
          activePath === "profile"
            ? "cursor-pointer hidden  text-[#810A82] lg:flex space-x-2 items-center"
            : "cursor-pointer hidden text-[#AFAFAF]  lg:flex space-x-2 items-center"
        }
      >
        {" "}
        <UserIcon color={activePath === "profile" ? "#810A82" : "#CBCBCB"} />
        <p>{user?.name}</p>
      </Link>
      {/* mobile */}
      <nav className="flex items-center justify-between h-[80px] lg:hidden px-4">
        <aside className="">
          <div>
            {!toggle ? (
              <Bars2Icon
                onClick={handleToggle}
                className="size-6 text-[#810A82]"
              />
            ) : (
              <XMarkIcon
                onClick={handleToggle}
                className="size-6 text-[#810A82]"
              />
            )}
          </div>
          {toggle && (
            <div className="flex flex-col space-y-4 absolute top-20  bg-white p-4 rounded right-0 shadow">
              <Link
                href="/home"
                className={
                  activePath === "home"
                    ? "cursor-pointer text-[#810A82] flex space-x-2 items-center"
                    : "cursor-pointer text-[#AFAFAF] flex space-x-2 items-center"
                }
              >
                {activePath === "home" ? <HomeIcon2 /> : <HomeIcon22 />}

                <p>Home</p>
              </Link>

              <Link
                href="/photos"
                className={
                  activePath === "photos"
                    ? "cursor-pointer text-[#810A82] flex space-x-2 items-center"
                    : "cursor-pointer text-[#AFAFAF] flex space-x-2 items-center"
                }
              >
                {activePath === "photos" ? <PhotoIcon22 /> : <PhotoIcon2 />}

                <p>Photo</p>
              </Link>

              <Link
                href="/gift"
                className={
                  activePath === "gift"
                    ? "cursor-pointer text-[#810A82] flex space-x-2 items-center"
                    : "cursor-pointer text-[#AFAFAF] flex space-x-2 items-center"
                }
              >
                {activePath === "gift" ? <GiftIcon2 /> : <GiftIcon22 />}
                <p>Gift</p>
              </Link>
              <Link
                href="/profile"
                className={
                  activePath === "profile"
                    ? "cursor-pointer  text-[#810A82] flex space-x-2 items-center"
                    : "cursor-pointer text-[#AFAFAF]  flex space-x-2 items-center"
                }
              >
                <UserIcon
                  color={activePath === "profile" ? "#810A82" : "#CBCBCB"}
                />

                <p>{user?.name}</p>
              </Link>
            </div>
          )}
        </aside>
      </nav>
    </header>
  );
}
