import { useState, useEffect, useRef } from "react";
import { SlOptionsVertical } from "react-icons/sl";

import { FaTools } from "react-icons/fa";
import { PiOvenDuotone } from "react-icons/pi";
import { GoRepoTemplate } from "react-icons/go";

const data = [
  { id: 1, text: "Tool Bought", icon: FaTools, price: "4" },
  { id: 2, text: "Vendor Fee", icon: PiOvenDuotone, price: "4" },
  { id: 3, text: "Employee Fee", icon: GoRepoTemplate, price: "4" },
  { id: 4, text: "Tools Bought", icon: FaTools, price: "4" },
  { id: 5, text: "Vendor Fee", icon: PiOvenDuotone, price: "4" },
  { id: 6, text: "Employee Fee", icon: GoRepoTemplate, price: "4" },
  { id: 7, text: "Tool Bought", icon: FaTools, price: "4" },
  { id: 8, text: "Vendor Fee", icon: PiOvenDuotone, price: "4" },
];

function RightSidebar() {
  const [isData, setIsData] = useState(data);
  return (
    <>
      <div className="hidden top-0 right-0 py-3 px-3 shadow-sm box-shaodw  rounded-lg  overflow-auto absolute w-[310px]  width-sidebar max-w-[310px] h-screen xl:flex flex-col">
        <div className="flex flex-col gap-3">
          <div className="flex items-center px-3 py-3 w-full justify-between">
            <span className="font-[600] text-[18px]">Expense Tracking</span>
            <SlOptionsVertical className="cursor-pointer" />         
          </div>
          {isData.map((item) => {
            const Icons = item.icon;
            return (
              <div
                key={item.id}
                className="flex shadow-sm  py-[26px] rounded-md justify-between px-4 border items-center"
              >
                <div className="flex items-center gap-2">
                  <Icons
                    className="text-[#528476] px-2 py-1 text-[35px] border-[#528476] border-[1px] border-solid rounded-full  font-[700]
                  "
                  />
                  <span className="text-[#528476] font-[600]">{item.text}</span>
                </div>
                <div>
                  <span className="text-[#95c860] font-medium">
                    ${item.price}.00
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default RightSidebar;
