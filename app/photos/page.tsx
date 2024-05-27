import React from "react";
import Header2 from "../components/Header2";
import Card from "../components/Card";

export default function page() {
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
          <div className="flex items-center flex-wrap justify-center sm:justify-center my-10">
            {/* {Array(10)
              .fill("")
              .map((i) => (
                <img
                  key={i}
                  className="rounded size-32 m-3"
                  src="https://t3.ftcdn.net/jpg/04/84/87/34/360_F_484873483_hg1ofIdXbMha5lKEDG3hJBrwKh1oikTq.jpg"
                  alt=""
                />
              ))} */}
              <p className="text-center font-semibold">
                No Photos Found
              </p>
          </div>
        </Card>
      </section>
    </div>
  );
}
