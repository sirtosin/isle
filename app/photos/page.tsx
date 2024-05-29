"use client";
import React, { useRef, useState } from "react";
import Header2 from "../components/Header2";
import Card from "../components/Card";
import usePhotoQuery from "../hooks/useCountQuery";
import axios from "axios";
import { useAppSelector } from "../redux/hook";
import { UploadPinIcon } from "../icons/Social";
import { Toast } from "../components/Toast";

export default function page() {
  const user = useAppSelector((state) => state.user.user);
  const [imageUrl, setImageUrl] = useState("");
  const { allImages } = usePhotoQuery();
  const hiddenFileInput = useRef<null | any>(null);
  const [file, setFile] = useState<any>(null);
  let data: any;
  if (typeof window !== "undefined") {
    data = localStorage.getItem("auth") ?? "";
  }
  const handleFileChange = (event: any) => {
    const formData = new FormData();
    formData.append("image", event.target.files[0]);
    formData.append("phone", `234${user?.phone?.toString().substring(0)}`);
    setFile(event.target.files[0]);
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFile(file);
      setImageUrl(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
    const fcloptions = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${data}`,
        "Access-Control-Allow-Origin": "*",
      },
    };
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}uploads`, formData, fcloptions)
      .then((res: any) => {
        Toast({ title: res?.data?.message, error: false });
      })
      .catch((err) => console.log("err", err));
  };
  const handleClick = (event: React.FormEvent) => {
    hiddenFileInput?.current.click();
  };
  return (
    <div>
      <Header2 />
      <section className="w-full sm:w-3/4 mx-auto p-5 sm:p-10">
        <Card>
          <div className="flex items-center space-y-4 flex-col  mx-auto">
            <h2 className="font-bold text-center text-2xl mt-5">
              Photo-Sharing
            </h2>
          </div>
          <div className="m-4">
            <h2 className="font-bold text-gray-500 capitalize text-[10px]">
              share a photo 🚀
            </h2>
            <span className="px-3 flex items-center space-x-4 !text-[#BABABB]">
              {file?.name ? (
                <img
                  src={imageUrl}
                  className="size-16 object-cover rounded-full"
                  alt=""
                />
              ) : (
                <p onClick={handleClick}>
                  <UploadPinIcon />
                </p>
              )}
            </span>
            <input
              onChange={handleFileChange}
              ref={hiddenFileInput}
              className="hidden"
              type="file"
            />
          </div>
          <div className="flex items-center flex-wrap justify-center sm:justify-center my-10">
            {allImages.isLoading ? (
              <p className="flex h-1/2 items-center justify-center text-center font-semibold text-gray-400 ">
                fetching gallery...
              </p>
            ) : allImages?.data?.length > 0 ? (
              allImages?.data?.map((i: any) => (
                <img
                  key={i._id}
                  className="rounded size-32 m-3"
                  src={i?.imageUrl}
                  alt="image"
                />
              ))
            ) : (
              <p className="text-center font-semibold">No Photos Found</p>
            )}
          </div>
        </Card>
      </section>
    </div>
  );
}
