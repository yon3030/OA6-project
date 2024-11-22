"use client";

import Image from "next/image";
import { useState } from "react";

function NumberInput() {
  const [amount, setAmount] = useState(0); // Initialize the amount with 0

  // Handler to increase the value
  const increaseAmount = () => {
    setAmount(amount + 1);
  };

  // Handler to decrease the value, ensuring it doesn't go below 0
  const decreaseAmount = () => {
    setAmount((prev) => Math.max(0, prev - 1));
  };

  return (
    <div className="max-w-[190px] relative mt-4 text-white">
      {/* <label className="block mb-1 text-sm text-slate-600">Select Amount</label> */}
      <div className="relative flex flex-row items-center">
        {/* <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        /> */}
        <div className="font-montserrat md:text-3xl text-2xl font-normal leading-[38px] w-[25px] md:w-[35px]">{amount}</div>
        <div className="font-montserrat md:text-3xl text-2xl font-normal leading-[38px]">FLOOR</div>
        <div className="flex flex-col items-center space-y-0">
          {/* plus button */}
          <button
            onClick={increaseAmount}
            className="rounded-md border border-transparent p-1.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <Image
              src={"/svgs/floorPlan/vector_up.svg"}
              alt="plus_icon"
              width={18}
              height={18}
              className="w-[17px] h-[8.25px]"
            />
          </button>

          {/* minus button */}
          <button
            onClick={decreaseAmount}
            className="rounded-md border border-transparent p-1.5 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          >
            <Image
              src={"/svgs/floorPlan/vector_down.svg"}
              alt="minus_icon"
              width={18}
              height={18}
              className="w-[17px] h-[8.25px]"
            />
          </button>
        </div>
      </div>
      {/* <p className="flex items-center mt-2 text-xs text-slate-400">
        Adjust the number using the + and - controls.
      </p> */}
    </div>
  );
}

export default NumberInput;
