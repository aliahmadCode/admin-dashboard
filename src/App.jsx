import SideBar from "./components/SideBar";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Progress from "./components/Progress";

import RightSidebar from "./components/RightSidebar";
import Chart from "./components/Chart";
import Expense from "./components/Expense";

function App() {
  return (
    <>
      <div className="flex">
        <SideBar />
        <div className="flex flex-col w-[98vw] lg:w-[78vw] xl:w-[85vw] ">
          <Navbar />
          <Header />
          <div className=" w-[100%]  relative mt-3 sm:mt-1 lg:mt-5">
            <div className="xl:w-[55vw] lg:w-[72vw] w-[96vw] bder flex flex-wrap xl:justify-center justify-center gap-1 lg:mx-2">
              <Progress />
              <Chart />
              <Expense />
            </div>
            <RightSidebar />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
