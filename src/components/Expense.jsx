import { useState, useEffect, useRef } from "react";
import { GrProjects } from "react-icons/gr";
import { LiaBuromobelexperte } from "react-icons/lia";
function Expense() {
  return (
    <>
      <div className="lg:w-[100%]  w-[70%] md:w-[60%] mt-1">
        <div className="flex flex-col w-[100%] py-7 px-6  gap-3 box-shaodw rounded-lg">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-3  py-2">
              <div className="bg-[#f4fbee] px-3 py-3 rounded-full ">
                <LiaBuromobelexperte className="text-[#95c860] text-[25px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-[600] text-[20px]">Total Expense</span>
                <span className="font-[600] text-[14px]">+$50 this week</span>
              </div>
            </div>
            <h3 className="text-[#95c860] text-[30px] sm:text-[40px] font-bold">$561,000</h3>
          </div>
          <div className="flex justify-center items-center rounded-lg py-2 bg-[#95c860] text-white sm:w-[25%]">
            Track Expenses
          </div>
        </div>
      </div>
    </>
  );
}

export default Expense;