import { useState, useEffect, useRef } from "react";
import { GrProjects } from "react-icons/gr";

function Invoices() {
  return (
    <>
      <div className="lg:w-[100%]  w-[90%] md:w-[60%] flex flex-col gap-2 mt-1 lg:flex-row lg:gap-2">
        <div className="flex flex-col w-[100%] lg:w-[54%] py-7 px-6 gap-3 box-shaodw rounded-lg">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-3 py-2">
              <div className="bg-[#f4fbee] px-3 py-3 rounded-full ">
                <GrProjects className="text-[#95c860] text-[23px]" />
              </div>
              <div className="flex flex-col">
                <span className="font-[600] text-[20px]">Invoices Generated</span>
                <span className="font-[600] text-[14px]">+$50 this week</span>
              </div>
            </div>
            <h3 className="text-[#95c860] text-[37px] sm:text-[40px] font-bold">50</h3>
          </div>
          <div className="flex justify-center items-center rounded-lg py-2 bg-[#95c860] w-[50%] text-white">
            View Projects
          </div>
        </div>
        <div className="flex flex-col w-[100%] lg:w-[54%] py-7 px-6 gap-3 box-shaodw rounded-lg">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-3 py-2">
              <div className="bg-[#f4fbee] px-3 py-3 rounded-full ">
                <GrProjects className="text-[#95c860] text-[23px]" />
              </div>
              <span className="font-[600] text-[18px]">
                Projects in Progress
              </span>
            </div>
            <h3 className="text-[#95c860] text-[37px] sm:text-[40px] font-bold">11</h3>
          </div>
          <div className="flex justify-center items-center rounded-lg py-2 bg-[#95c860] w-[50%] text-white">
            View Projects
          </div>
        </div>
      </div>
    </>
  );
}

export default Invoices;
