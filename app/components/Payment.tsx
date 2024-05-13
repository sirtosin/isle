import React, { useState } from "react";
import ModalCard from "./modal/Modal";
import { Bank, CardPayment } from "../icons/Account";
import Button from "./Button";
import Input from "./Input";

export default function Payment({ handleModal, modal }: any) {
  const [view, setView] = useState(0);
  return (
    <>
      <ModalCard setOpen={handleModal} open={modal}>
        {view === 0 && (
          <div className="flex items-center flex-col justify-center space-y-4 sm:w-[500px]">
            <span className="flex items-center flex-col space-y-2">
              <h2 className="font-bold">Secure Payment Options</h2>
              <p>Choose your preferred method</p>
            </span>
            <div className="flex flex-col space-y-3 sm:space-x-5 items-center justify-center w-full">
              <span
                onClick={() => setView(1)}
                className="flex flex-col cursor-pointer items-center justify-center border-2 border-[#524C4C] rounded-xl w-3/4 h-[150px]"
              >
                <Bank />
                <p className="text-[#524C4C]">Bank Transfer</p>
              </span>
              <span
                onClick={() => setView(2)}
                className="flex flex-col cursor-pointer items-center justify-center border-2 border-[#524C4C] rounded-xl w-3/4 h-[150px]"
              >
                {" "}
                <CardPayment />
                <p className="text-[#524C4C]">Card Payment</p>
              </span>
            </div>
          </div>
        )}
        {view === 1 && <BankMethod />}
        {view === 2 && <CardMethod />}
      </ModalCard>
    </>
  );
}

export const CardMethod = () => (
  <div className="sm:w-[450px] overflow-hidden">
    <span className="flex items-center flex-col space-y-2 my-3">
      <h2 className="font-bold">Card Payment</h2>
      <p className="text-center text-[#4C4D50]">
        Effortless Checkout with Any Card
      </p>
    </span>
    <span className="flex items-center flex-col-reverse space-y-2 my-3">
      <h2 className="font-bold text-3xl">&#8358; 15,000</h2>
      <p className="text-center text-[#4C4D50] font-semibold">Amount</p>
    </span>
    <hr className="bg-[#BCBBBB]" />
    <div className="flex space-y-3 flex-col w-full">
      <div className="flex items-center flex-col  sm:flex-row sm:space-x-5 ">
        <Input type="text" label="Card Name:" value="" />
        <Input type="text" label="Card Number:" value="" />
      </div>
      <div className="flex items-center space-x-2">
        <Input type="date" label=" Expiry Date:" value="" />
        <Input type="type" label="CVV:" value="" />
      </div>
    </div>
    <h2 className="font-bold mt-4">Note:</h2>
    <p>
      Our hassle-free return policy allows you to request a refund if you're not
      satisfied within 24hours of inspection.
    </p>
    <p className="text-center text-sm text-[#1C1D21] my-4">
      You will be charged a fee of &#8358;100 for this Transaction
    </p>
    <Button
      //   onClick={handleModal}
      label="PAY"
      styles="!text-[#ff] rounded w-3/4 mx-auto flex items-center justify-center mt-5 bg-[#3399FF]"
      loading={false}
    />
  </div>
);
export const BankMethod = () => (
  <div className="sm:w-[450px] overflow-hidden">
    <span className="flex items-center flex-col space-y-2 my-3">
      <h2 className="font-bold">Bank Transfer</h2>
      <p className="text-center text-[#4C4D50]">
        Once your payment is complete, click "Paid" and submit your receipt for
        verification.
      </p>
    </span>
    <div className="flex space-y-3 flex-col w-full">
      <Input type="text" label="Bank:" disabled value="Zenith Bank" />
      <Input type="text" label="Account Number:" value="0123456789" />
      <Input type="text" label="Name:" disabled value="Smith John" />
    </div>
    <h2 className="font-bold mt-4">Note:</h2>
    <p>
      Our hassle-free return policy allows you to request a refund if you're not
      satisfied within 24hours of inspection.
    </p>
    <Button
      //   onClick={handleModal}
      label="I HAVE MADE THIS BANK  TRANSFER"
      styles="!text-[#ff] rounded w-full sm:w-3/4 mx-auto flex items-center justify-center mt-5 bg-[#3399FF]"
      loading={false}
    />
  </div>
);
