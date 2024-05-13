"use client";
import React, { useState } from "react";
import Card from "./Card";
import { NairaIcon } from "../icons/Edit";
import Button from "./Button";
import Input from "./Input";
import Payment from "./Payment";

export default function Products() {
  const [modal, setModal] = useState(false);
  const handleModal = () => setModal((prev) => !prev);

  return (
    <section className="w-3/4 mx-auto">
      {modal && <Payment />}
      <Card>
        <div className="border-2 rounded-lg border-black mx-4 my-10">
          <h2 className="p-5 font-bold text-xl">PRODUCT INFORMATION</h2>
          <hr className="bg-black h-0.5" />
          <form className="p-10 flex items-center space-x-5 w-full">
            <div className="w-full">
              <Input
                label="Product Name:"
                placeholder="Product Name:"
                name="product"
                type="text"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />{" "}
              <Input
                label="Screen Size:"
                placeholder="Screen Size:"
                name="screen"
                type="text"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />{" "}
              <Input
                label="Brand:"
                placeholder="Brand:"
                name="brand"
                type="text"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />{" "}
              <Input
                label="Price:"
                placeholder="Price:"
                name="price"
                type="number"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />
            </div>
            <div className="w-full">
              <div className="font-semibold capitalize flex flex-col space-y-1 w-full">
                <label htmlFor="Category" className="text-sm font-medium">
                  Category:
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
              <Input
                label="Resolution:"
                placeholder="Resolution:"
                name="resolution"
                type="text"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />{" "}
              <Input
                label="Color:"
                placeholder="Color:"
                name="brand"
                type="text"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />{" "}
              <Input
                label="Phone Number:"
                placeholder="Phone Number:"
                name="phone"
                type="number"
                onChange={() => {}}
                onBlur={() => {}}
                value={""}
              />
            </div>
          </form>
          <h3 className="my-2 pl-10 font-semibold">Product Condition:</h3>
          <form className="flex items-center space-x-5 px-10">
            <span className="flex items-center space-x-2">
              <input type="radio" value="" />
              <p>Used</p>
            </span>
            <span className="flex items-center space-x-2">
              <input type="radio" value="" />
              <p>Brand New</p>
            </span>
            <span className="flex items-center space-x-2">
              <input type="radio" value="" />
              <p>Refurbished</p>
            </span>
          </form>
          <div className="font-semibold capitalize flex flex-col space-y-1 w-full p-10">
            <label htmlFor="Category" className="text-sm font-semibold">
              Category:
            </label>
            <textarea
              name=""
              className="p-5 border-[1px] rounded-lg resize-none"
              placeholder="description"
            />
          </div>
        </div>
        <aside className="border-2 rounded-lg border-black mx-4 my-10">
          <h2 className="p-5 font-bold">LOCATION INFORMATION</h2>
          <hr className="bg-black h-0.5" />
          <div className="flex items-center space-x-4">
            <div className="foncapitalize flex flex-col w-full p-5">
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
            <div className="font-semibold capitalize flex flex-col space-y-1 w-full p-5">
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
          </div>
        </aside>
      </Card>
      <Card>
        <div className="border-2 rounded-lg border-black m-5 p-4 w-2/3 mx-auto flex flex-col">
          <h2 className="font-semibold w-2/3">
            To upload your product, you will to pay a sum for service charge.
          </h2>
          <p className="ml-auto flex items-center">
            <NairaIcon /> 1,000
          </p>
        </div>

        <Button
          loading={false}
          label="Upload"
          styles="bg-[#3399FF] w-2/3 mx-auto"
          onClick={handleModal}
        />
      </Card>
    </section>
  );
}
