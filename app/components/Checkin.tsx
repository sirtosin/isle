import React from 'react'
import Button from './Button';
import { ArrowLogin } from '../icons/Arrow';
import Card from './Card';

export default function Checkin() {
  return (
    <div>
      <Card>
        <div className="flex p-5">
          <span className="flex capitalize items-center justify-between">
            <p className="text-gray-500 text-sm">Name:</p>
            <h2 className="font-semibold text-[#810A82]">adefopep tosin</h2>
          </span>
          <span className="flex capitalize items-center justify-between">
            <p className="text-gray-500 text-sm">Phone:</p>
            <h2 className="font-semibold text-[#810A82]">0812020020</h2>
          </span>
          <span className="flex capitalize items-center justify-between">
            <p className="text-gray-500 text-sm">Email:</p>
            <h2 className="font-semibold text-[#810A82]">adefopep tosin</h2>
          </span>
          <span className="flex capitalize items-center justify-between">
            <p className="text-gray-500 text-sm">Invitation Code:</p>
            <h2 className="font-semibold text-[#810A82]">adefopep tosin</h2>
          </span>
          <Button
            icon={<ArrowLogin />}
            loading={loading2}
            onClick={handleCheckin}
            label="Check In"
            styles="bg-[#810A82] w-full  my-5"
          />
        </div>
      </Card>
    </div>
  );
}
