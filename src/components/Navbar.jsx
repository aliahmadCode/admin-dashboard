import { useState, useEffect, useRef } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { FaPlus } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";
import { PiQuotesFill } from "react-icons/pi";
import { GoProjectSymlink } from "react-icons/go";
import { BiSolidPurchaseTag } from "react-icons/bi";
import { MdPayment } from "react-icons/md";
import { FaHospitalUser } from "react-icons/fa6";
import { IoClipboard } from "react-icons/io5";
import { PiOvenDuotone } from "react-icons/pi";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { TbBellFilled } from "react-icons/tb";
import { RiSettings3Fill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";

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

function Navbar() {
  const [isHide, setIsHide] = useState(false);
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
      <div className="flex w-[100vw] justify-between items-center lg:hidden  relative">
        <div className="flex gap-0">
          <RiMenu4Line
            onClick={() => setIsHide((prev) => !prev)}
            className="cursor-pointer my-6 mx-1 ml-2 hover:bg-[#528476] hover:text-white px-2 py-1 rounded-sm text-[35px]"
          />

          <img
            src="/logo.svg"
            alt="logo"
            className="w-[120px] h-[120px] py-3 select-none"
          />
        </div>
        <div className="sm:flex hidden mt-1 relative justify-center lg:hidden lg:w-[400px] lg:justify-start">
          <input
            type="text"
            className="w-[95%] sm:w-[300px] md:w-[400px] flex placeholder:items-center lg:w-[400px] bg-white shadow-md py-2 px-4 rounded-full pr-10"
            placeholder="Search..."
          />
          <div className="absolute right-6 top-2 text-[23px] cursor-pointer ">
            <IoSearchOutline />
          </div>
        </div>
        <div className="flex mr-3 gap-3">
          <TbBellFilled className="bg-[#fefffe] text-[#528476] px-2 py-1 rounded-full text-[35px] shadow-md" />
          <RiSettings3Fill className="bg-[#fefffe] text-[#528476] px-2 py-1 rounded-full text-[35px] shadow-md" />
          <img
            className="w-[35px] h-[35px] rounded-full shadow-md"
            src="/user.webp"
            alt="user"
          />
        </div>
      </div>
      {isHide ? (
        <div className="flex absolute top-0 z-50 left-0 lg:hidden flex-col bg-[#fefffe] w-full max-w-[280px] min-w-[280px] h-screen shadow-md overflow-auto">
          <div
            className="absolute top-0 left-1 cursor-pointer my-6 mx-1 hover:bg-[#528476] hover:text-white px-[8px] py-2  rounded-sm text-[20px]"
            onClick={() => setIsHide((prev) => !prev)}
          >
            <RxCross2 />
          </div>
          <div className=" flex flex-col items-center">
            <div className="py-2">
              <img
                className="w-[150px] h-[150px] py-3 select-none"
                src="/logo.svg"
                alt="logo"
              />
            </div>
            <div className="flex flex-col gap-[10px] mt-2">
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
                            fontWeight: "600",
                          }
                        : null
                    }
                    onClick={() => handleClick(item.id)}
                    className="flex  text-[#777776] px-8 py-[10px] rounded-lg cursor-pointer items-center gap-3"
                    key={item.id}
                  >
                    <Icons className="ml-7" />
                    <span>{item.text}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Navbar;
