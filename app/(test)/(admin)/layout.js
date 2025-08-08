import { NavBar } from "@/components/navBar";
import { Sidebaar } from "@/components/sidebaar";
import { Inter } from "next/font/google";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
export default function AdminLayOut({ children }) {
  return (
    <div className={`admin bg-[#00011F] max-w-full`}>
      <div className="flex h-[200vh] ">
        <div className="h-screen w-60 sticky top-0">
          <Sidebaar />
        </div>
        <div className="flex-1 mx-4">
          <NavBar />
          <div className="w-full overflow-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
