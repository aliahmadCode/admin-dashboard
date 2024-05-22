import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Progress from "./components/Progress";

import { SlOptionsVertical } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { FaTools } from "react-icons/fa";
import { PiOvenDuotone } from "react-icons/pi";
import { GoRepoTemplate } from "react-icons/go";

import { MdOutlineMenuOpen } from "react-icons/md";
import RightSidebar from "./components/RightSidebar";
import Chart from "./components/Chart";
import Expense from "./components/Expense";
import Invoices from "./components/Invoices";
import { useState } from "react";
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

function App() {
  const [isHide, setisHide] = useState(false);
  const [isData, setIsData] = useState(data);
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-[98vw] lg:w-[78vw] xl:w-[85vw] mt-0">
          <Navbar />
          <Header />
          <div className=" w-[100%]  relative  mt-8 sm:mt-1 lg:mt-8">
            <div
              
              className="xl:w-[55vw] 2xl:w-[60vw] lg:w-[72vw]  w-[96vw] flex flex-wrap xl:justify-center justify-center gap-1 lg:mx-2 mb-5"
            >
              <div onClick={() => setisHide((prev) => !prev)} className="xl:hidden absolute top-[-37px] right-5 lg:top-[-35px] lg:right-14 cursor-pointer  px-[7px] py-[7px]  rounded-sm text-[18px] hover:bg-[#95c860] hover:text-white">
                {isHide ? <RxCross2 /> : <MdOutlineMenuOpen />}
              </div>
              <Progress />
              <Chart />
              <Expense />
              <Invoices />
            </div>
            <RightSidebar />
            {isHide ? (
              <div className="xl:hidden top-0 right-0 py-3 px-3 shadow-sm box-shaodw  rounded-lg bg-[#fefffe]  overflow-auto absolute w-[310px]  width-sidebar max-w-[310px] h-screen flex flex-col">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center px-3 py-3 w-full justify-between">
                    <span className="font-[600] text-[18px]">
                      Expense Tracking
                    </span>
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
                          <span className="text-[#528476] font-[600]">
                            {item.text}
                          </span>
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
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
