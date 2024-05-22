import { useState, useEffect, useRef } from "react";
import { GrProjects } from "react-icons/gr";

function Progress() {
  return (
    <>
      <div className="flex flex-col w-[70%] md:w-[60%] lg:w-[50%] gap-2 ">
        <div className="flex flex-col w-[100%] py-7 px-6 gap-3 box-shaodw rounded-lg">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-3 py-2">
              <div className="bg-[#f4fbee] px-3 py-3 rounded-full ">
                <GrProjects className="text-[#95c860] text-[23px]" />
              </div>
              <span className="font-[600] text-[18px]">Projects in Progress</span>
            </div>
            <h3 className="text-[#95c860] text-[35px] sm:text-[40px] font-bold">900</h3>
          </div>
          <div className="flex justify-center items-center rounded-lg py-2 bg-[#95c860] w-[50%] text-white">View Projects</div>
        </div>
        <div className="flex flex-col w-[100%] py-6 px-6 gap-3 box-shaodw rounded-lg">
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-3 py-2">
              <div className="bg-[#f4fbee] px-3 py-3 rounded-full ">
                <GrProjects className="text-[#95c860] text-[23px]" />
              </div>
              <span className="font-[600] text-[18px]">Pending Quotes</span>
            </div>
            <h3 className="text-[#95c860] text-[35px] sm:text-[40px] font-bold">900</h3>
          </div>
          <div className="flex justify-center items-center rounded-lg py-2 bg-[#95c860] w-[50%] text-white">View Quotes</div>
        </div>
        
      </div>
    </>
  );
}

export default Progress;
