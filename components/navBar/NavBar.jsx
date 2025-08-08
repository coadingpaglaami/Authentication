import { BellDotIcon, ChevronDown, Search, SettingsIcon } from "lucide-react";
import React from "react";

export const NavBar = () => {
  return (
    <div className="h-20  min-w-full text-white sticky top-0 w-full border-2 border-[#505058] rounded-lg">
      <div className="flex items-end pb-2 w-full h-full bg-[#0C0D29]">
        <div className="flex items-center w-full justify-between p-2 bg-gray-900 text-white">
          <div className="flex items-center gap-2">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Here"
                className="bg-gray-800 text-white p-2 pl-8 rounded-md focus:outline-none w-full"
              />
              <Search
                className="absolute left-2 top-3 text-gray-400"
                size={16}
              />
            </div>
            <div className="flex flex-row items-center gap-2">
              <span className="text-[#E9EAF3] text-sm ">Data Range: </span>
              <select className="bg-[#050631] border border-[#666677]  text-[#A2A2A7] text-sm p-2 ml-2 rounded-md focus:outline-none">
                <option> Last 30 Days</option>
              </select>
            </div>
          </div>
          <div className="flex items-center gap-4 text-[#C3C3D8]">
            <button className="p-2 bg-gray-700 rounded-full ">
              <BellDotIcon className="w-5 h-5" />
            </button>
            <button className="p-2 bg-gray-700 rounded-full ml-2">
              <SettingsIcon className="w-5 h-5" />
            </button>
            <div className="flex items-start justify-center ml-2">
              <img
                src="https://img.freepik.com/free-photo/indoor-shot-happy-beautiful-woman-with-curly-bushy-dark-hair-healthy-pure-skin-broad-smile-white-even-teeth_273609-8841.jpg?semt=ais_hybrid&w=740"
                alt="User Avatar"
                className="w-13 h-12 rounded-full"
              />
              <span className="ml-2 text-sm flex flex-col gap-1 ">
                Alamin Khan <span className="text-gray-400">Artist</span>
              </span>
              <button>
                <ChevronDown className="text-[#A2A2A7]"/>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
