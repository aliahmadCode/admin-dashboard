import { useState, useEffect, useRef } from "react";
import MyChart from "./ChartJs";

function Chart() {
  return (
    <>
      <div className="flex w-[90%] md:w-[60%]  lg:w-[49%] gap-2 box-shaodw rounded-lg ml-[2px] xl:ml-0">
        <div className="w-full flex items-center relative justify-center py-5 sm:py-6 lg:py-0">
          <div className="absolute text-[12px] 2xl:text-[14px] xl:text-[13px] rotate-text position-left">Expenses</div>
          <div className="absolute bottom-1 lg:bottom-[68px] text-[12px] xl:text-[13px] 2xl:text-[14px]">Months</div>
          <div className="w-[270px] sm:w-[380px] lg:w-[350px] xl:w-[320px] 2xl:w-[430px]">
            <MyChart />
          </div>
        </div>
      </div>
    </>
  );
}

export default Chart;
