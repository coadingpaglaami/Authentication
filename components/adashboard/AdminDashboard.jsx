import React from "react";
import { ChevronUp, ChevronDown, ArrowUp, ArrowDown } from "lucide-react";
import Image from "next/image";
import {
  AvgOrder,
  CurrStock,
  GreenUp,
  ItemSold,
  RedDown,
  TotalRev,
} from "@/images/image";

const stats = [
  {
    title: "Total Revenue",
    value: "$24,568.80",
    change: "12.5%",
    trend: "up",
    image: TotalRev,
  },
  {
    title: "Items Sold",
    value: "1,243",
    change: "8.5%",
    trend: "up",
    image: ItemSold,
  },
  {
    title: "Current Stock",
    value: "3,587",
    change: "6.5%",
    trend: "down",
    image: CurrStock,
  },
  {
    title: "Avg. Order Value",
    value: "$42.35",
    change: "10.5%",
    trend: "up",
    image: AvgOrder,
  },
];
export const AdminDashboard = () => {
  return (
    <div className=" text-white ">
      <div className="py-3 mb-4">
        <div>
          <h2 className="text-xl font-bold">Merchandise Dashboard</h2>
          <p className="text-[#8989A2] text-sm">
            Overview of your merchandise sales & inventory
          </p>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="  rounded-lg p-4 " style={{background:' linear-gradient(to bottom, #050631, #310D46)'}}>
            <div className="flex justify-between">
              <div>
                <h3 className="text-sm text-gray-400">{stat.title}</h3>
                <p className="text-2xl font-bold mb-2">{stat.value}</p>
              </div>
              <div className="flex items-center  p-4 rounded-full bg-[#4F4F7C]">
                <Image
                src={stat.image}
                height={80}
                width={80}
                alt="eventimag"
                className="w-6 h-6"/></div>
            </div>
            <div className="flex justify-between mt-5">
              <p
                className={`flex gap-1 text-sm ${
                  stat.trend === "up" ? "text-green-400" : "text-red-400"
                }`}
              >
                {stat.trend === "up" ? (
                  <ArrowUp className="inline-block" size={16} />
                ) : (
                  <ArrowDown className="inline-block" size={16} />
                )}{" "}
                {stat.change}{" "}
                <p className="text-[#8D8D94]"> vs last month</p>
              </p>
              <Image
                src={stat.trend === "up" ? GreenUp : RedDown}
                alt="up-down"
                width={80}
                height={80}
                className="w-6 h-6"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
