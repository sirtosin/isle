import React from 'react'
import Card from './Card'

export default function OrderDetails() {
  return (
    <section className="w-3/4 mx-auto">
      <Card>
        <h2>Order Details</h2>
        <hr className="bg-black h-0.5" />
        <div>
          <aside className="border-2 rounded-lg border-black mx-4 my-10">
            <p>Date: 15-02-2023</p>
            <div className="mx-4 my-10 flex items-center justify-around p-3">
              <img
                className="size-20 rounded-lg"
                src="https://i5.walmartimages.com/seo/Lenovo-IdeaPad-3i-14-Laptop-Intel-Core-i5-1235U-8GB-RAM-512GB-SSD-Windows-11-Home-Arctic-Grey-82RJ0007US_2636a308-dc1c-4235-a1f3-cc826ed59556.6790f1aa7755583035b970d4f8ea4526.jpeg"
                alt=""
              />
              <div className="w-2/3">
                <h2 className="text-[#191C1F] font-bold my-1">
                  2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM,
                  256GB SSD Storage) - Space Gray
                </h2>
                <span className="flex items-center space-x-2">
                  <p className="bg-[#00CC00] text-white px-2 py-1 w-max font-bold">
                    PAID
                  </p>
                </span>
              </div>
              <p className="text-[#3399FF] font-bold cursor-pointer">
                SEE DETAILS
              </p>
            </div>
          </aside>
          <aside className="border-2 rounded-lg border-black mx-4 my-10"></aside>
        </div>
      </Card>
    </section>
  );
}
