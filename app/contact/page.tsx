import React from 'react'
import Footer from '../components/Footer';
import Button from '../components/Button';
import Input from '../components/Input';

export default function page() {
  return (
    <>
      <div className="mx-auto p-10">
        <h2 className="text-center font-bold text-4xl my-5"> Contact us</h2>
        <form className="flex flex-col space-y-4 items-center justify-center w-1/2 mx-auto">
          <Input type="text" label="Full Name:" value="" />
          <Input type="phone" label="Phone:" value="" />
          <Input type="email" label="email:" value="" />
          <Input type="text" label="message:" value="" />
          <Button
            loading={false}
            label=" Submit"
            styles="bg-green-600 w-full"
          />
        </form>
      </div>
      <Footer />
    </>
  );
}
