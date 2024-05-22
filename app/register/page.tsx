import React from 'react'
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default function page() {
  return (
    <>
      <Header />

      <h2 className="text-center font-bold text-4xl my-5">
        {" "}
        Register your account
      </h2>
      <form className="flex flex-col space-y-4 items-center justify-center w-1/2 mx-auto my-10">
        <Input type="phone" label="Phone:" value="" />
        <Input type="email" label="email:" value="" />
        <Input type="text" label="invitation code:" value="" />
        <Input type="password" label="password" value="" />
        <Button loading={false} label=" Submit" styles="bg-green-600 w-full" />
      </form>
      <Footer />
    </>
  );
}
