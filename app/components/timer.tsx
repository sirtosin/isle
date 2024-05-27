import React, { useState, useEffect } from "react";

const Countdown = ({ targetDate }: any) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span key={interval}>
        {timeLeft[interval]} {interval}{" "}
      
      </span>
    );
  });

  return (
    <div>
      <h2 className="mt-6 text-center font-bold text-xl">
        Countdown to the wedding
      </h2>

      {timerComponents.length ? (
        <article className="flex items-center sm:space-x-5 flex-wrap justify-center px-10">
          <div className="flex items-center justify-center flex-col">
            <h2 className="shadow-md rounded py-4 px-8 size-20 m-4 flex text-[#515151] font-semibold text-2xl items-center justify-center ">
              {timeLeft?.days}
            </h2>
            <p className="mb-4 font-semibold">Days</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="shadow-md rounded py-4 px-8 size-20 m-4 flex text-[#515151] font-semibold text-2xl items-center justify-center ">
              {timeLeft?.hours}
            </h2>
            <p className="mb-4 font-semibold">Hours</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="shadow-md rounded py-4 px-8 size-20 m-4 flex text-[#515151] font-semibold text-2xl items-center justify-center ">
              {timeLeft?.minutes}
            </h2>
            <p className="mb-4 font-semibold">Minutes</p>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="shadow-md rounded py-4 px-8 size-20 m-4 flex text-[#515151] font-semibold text-2xl items-center justify-center ">
              {timeLeft?.seconds}
            </h2>
            <p className="mb-4 font-semibold">Seconds</p>
          </div>
        </article>
      ) : (
        <span>Time's up!</span>
      )}
    </div>
  );
};

export default Countdown;
