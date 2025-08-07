import {
  LayoutGrid,
  ShoppingBag,
  Users,
  BarChart2,
  Settings,
  HelpCircle,
} from "lucide-react";

export const Sidebaar = () => {
  return (
    <div className="flex flex-col justify-between gap-10 bg-[#0D0D29] h-full  text-white py-10 px-4">
      <div className="text-white flex flex-col">
        <div className="p-4 flex items-center">
          <img src="/logo.png" alt="Merch Hub Logo" className="h-8" />
        </div>
        <div className="flex-1">
          <div className="px-4 py-2 text-gray-400">Main Menu</div>
          <ul className="space-y-1">
            <li className="px-4 py-2 bg-purple-700 rounded">
              <LayoutGrid className="inline-block mr-2" size={16} /> Overview
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <ShoppingBag className="inline-block mr-2" size={16} /> Products
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <ShoppingBag className="inline-block mr-2" size={16} /> Orders
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <Users className="inline-block mr-2" size={16} /> Customers
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <BarChart2 className="inline-block mr-2" size={16} /> Analytics
            </li>
          </ul>

          {/* Settings Section */}
          <div className="px-4 py-2 text-gray-400 mt-4">Settings</div>
          <ul className="space-y-1">
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <Settings className="inline-block mr-2" size={16} /> Settings
            </li>
            <li className="px-4 py-2 hover:bg-gray-700 rounded">
              <HelpCircle className="inline-block mr-2" size={16} /> Help Center
            </li>
          </ul>
        </div>
      </div>
      <div className="p-4 bg-gray-800 rounded-lg m-4 w-full ">
        <div className="text-purple-400 mb-2">Pro Features</div>
        <p className="text-xs text-gray-300">
          Unlock advanced analytics & inventory forecasting
        </p>
        <button className="mt-2 mc w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded">
          Update Now
        </button>
      </div>
    </div>
  );
};
