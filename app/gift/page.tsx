import React from 'react'
import Header2 from '../components/Header2';
import Card from '../components/Card';
import { CopyIcon, LineIcon } from '../icons/Location';

export default function page() {
  return (
    <div>
      <Header2 />
      <section className="w-3/4 mx-auto p-10">
        <Card>
          <div className="flex items-center space-y-4 flex-col  mx-auto">
            <h2 className="font-bold text-center text-2xl mt-5">
              Gifting Couple
            </h2>
            <p className="w-full sm:w-1/2 text-center">
              You can gift the couple by transferring a thoughtful amount into
              the couple's First Bank account.
            </p>
            <article className="flex items-center justify-center space-y-5 flex-col bg-[#FFE4FF] py-5 px-10 w-1/2">
              <h2 className="font-bold">First Bank</h2>
              <span className="flex items-center space-x-3">
                <p className="text-[#810A82] font-bold text-2xl">123467982</p>
                <CopyIcon />
              </span>
              <p className="font-bold">Kelvin Tosin</p>
            </article>
            <article className="my-10">
              <h2 className="text-[#4C4D50] font-bold text-xl">Steps to Make Transfer</h2>
              <div className="flex my-5 space-x-4">
                <span>
                  <LineIcon />
                </span>
                <span className="flex flex-col space-y-4">
                  <p>Copy couple’s “Account Number” above.</p>
                  <p>Open your bank app and “Paste Account Number”.</p>
                  <p>Input the “Amount” you want to gift couple.</p>
                </span>
              </div>
            </article>
          </div>
        </Card>
      </section>
    </div>
  );
}