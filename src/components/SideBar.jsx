import { useState, useEffect, useRef } from "react";
import { FaPlus } from "react-icons/fa6";
import { GiCheckedShield } from "react-icons/gi";
import { MdDashboard } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa6";
import { IoClipboard, IoTimeSharp } from "react-icons/io5";
import { PiOvenDuotone } from "react-icons/pi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { DiUbuntu } from "react-icons/di";


const data = [
  { id: 1, text: "Dashboard", icon: MdDashboard, checked: true },
  { id: 2, text: "Quotes", icon: PiQuotesFill, checked: false },
  { id: 3, text: "Projects", icon: GoProjectSymlink, checked: false },
  { id: 4, text: "Expenses", icon: BiSolidPurchaseTag, checked: false },
  { id: 5, text: "Payrolls", icon: MdPayment, checked: false },
  { id: 6, text: "Users", icon: FaHospitalUser, checked: false },
  { id: 7, text: "Clients", icon: IoClipboard, checked: false },
  { id: 8, text: "Vendors", icon: PiOvenDuotone, checked: false },
  { id: 9, text: "Invoices", icon: LiaFileInvoiceSolid, checked: false },
  {
    id: 10,
    text: "Balance Sheets",
    icon: MdOutlineAccountBalanceWallet,
    checked: false,
  },
];

function SideBar() {
  const [myDataSet, setMyDataSet] = useState(data);

  function handleClick(id) {
    const arr = data.map((item) => {
      if (item.id === id) {
        item.checked = true;
        return item;
      } else {
        item.checked = false;
        return item;
      }
    });
    setMyDataSet(arr);
  }

  return (
    <>
      <div className="hidden lg:flex flex-col bg-[#fefffe] w-full max-w-[280px] min-w-[280px] h-screen max-h-[150vh] shadow-md overflow-auto">
        <div className=" flex flex-col items-center">
          <div className="py-2">
            <img
              className="w-[150px] h-[150px] py-3 "
              src="/logo.svg"
              alt="logo"
            />
          </div>
          <div className="flex flex-col gap-[10px] mt-2 te">
            <div className="text-[#528476] cursor-pointer  flex items-center gap-[6px] py-[6px] border-[1px] border-solid border-[#528476] px-4 text-[16px] rounded-md hover:bg-[#528476] hover:text-white">
              <FaPlus />
              <span className="font-[600]">Create a Quote</span>
            </div>
            <div className="text-white cursor-pointer bg-[#528476]  flex items-center gap-[6px] py-[6px] border-[1px] border-solid border-[#528476] px-4 text-[16px] rounded-md">
              <FaPlus />
              <span className="font-[600]">Create a Quote</span>
            </div>
          </div>
          <div className="flex flex-col mt-5 mb-4 gap-1">
            {myDataSet.map((item) => {
              const Icons = item.icon;
              return (
                <div
                  style={
                    item.checked
                      ? {
                          backgroundColor: "#dadfdd",
                          color: "#528476",
                          boxShadow: "-2px 0px 0px 0px #528476",
                          fontWeight: '600'
                        }
                      : null
                  }
                  onClick={() => handleClick(item.id)}
                  className="flex  text-[#777776] px-8 py-[10px] rounded-lg cursor-pointer items-center gap-3"
                  key={item.id}
                >
                  <Icons  className="ml-7"/>
                  <span>{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
