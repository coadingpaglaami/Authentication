import {
  LayoutGrid,
  ShoppingBag,
  Users,
  BarChart2,
  Settings,
  HelpCircle,
} from "lucide-react";
import Image from "next/image";
// const menuItems = [
//   { icon: <LayoutGrid />, label: "Overview", active: true },
//   { icon: <ShoppingBag />, label: "Products", active: false },
//   { icon: <ShoppingBag />, label: "Orders", active: false },
//   { icon: <Users />, label: "Customers", active: false },
//   { icon: <BarChart2 />, label: "Analytics", active: false },
// ];
const menuItems = [
  { icon: LayoutGrid, label: "Overview", active: true },
  { icon: ShoppingBag, label: "Products", active: false },
  { icon: ShoppingBag, label: "Orders", active: false },
  { icon: Users, label: "Customers", active: false },
  { icon: BarChart2, label: "Analytics", active: false },
];

const settins = [
  { icon: Settings, label: "Settings" },
  { icon: HelpCircle, label: "Help Center" },
];
export const Sidebaar = () => {
  return (
    <div className="flex flex-col justify-between gap-10 bg-[#0D0D29] h-full w-full  text-white py-10 px-4 overflow-y-auto overflow-x-hidden">
      <div className="text-white flex flex-col">
        <div className="p-4 flex items-center">
          <img src="/logo.png" alt="Merch Hub Logo" className="h-8" />
        </div>
        <div className="flex-1">
          <div className="px-4 py-2 text-gray-400">Main Menu</div>
          <ul className="space-y-1">
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`px-4 py-2 rounded ${
                  item.active
                    ? "bg-[#3E1D57]  text-[#A37EC0] rounded-lg"
                    : "hover:bg-gray-700 text-[#848493]"
                }`}
              >
                <item.icon className="inline-block mr-2" size={16} />{" "}
                <span className="">{item.label}</span>
              </li>
            ))}
          </ul>

          {/* Settings Section */}
          <div className="px-4 py-2 text-gray-400 mt-4">Settings</div>
          <ul className="space-y-1">
            {settins.map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 rounded 
                    hover:bg-gray-700 text-[#848493]"
              >
                <item.icon className="inline-block mr-2" size={16} />{" "}
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg w-full ">
        <div className="flex flex-row items-center gap-2 text-white  mb-2 text-sm">
          <div
            className="p-2 rounded-full "
            style={{ backgroundColor: "#8F7A9E" }}
          >
            <Image
              src="/pro features.png"
              alt="pro features"
              height={80}
              width={80}
              className="w-5 h-5 relative z-10"
            />
          </div>
          <span>Pro Features</span>
        </div>
        <p className="text-[10px] text-gray-300">
          Unlock advanced analytics & inventory forecasting
        </p>
        <button className="mt-2 w-full bg-[#3E4072] text-white py-1 rounded-full border border-[#4E4E7F] text-sm">
          Update Now
        </button>
      </div>
    </div>
  );
};
