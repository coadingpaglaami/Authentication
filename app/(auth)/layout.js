import { AuthImg } from "@/utils/image";
import Image from "next/image";


export default function AuthLayOut({ children }) {

    return (
        <div className={`grid `}>
            <Image
                src={AuthImg}
                alt="loading"
                height={900}
                width={900}
                className="absolute w-full h-full z-0 object-cover" />

            <div className="absolute z-10 h-full w-full bg-black/20 backdrop-blur-[7px]"></div>
            <div className="grid w-full min-h-screen place-items-center p-5">
                <div className="p-10 px-5 md:px-20 relative z-20 border bg-white/5 max-w-[800px] w-full mx-auto text-white  rounded-lg ">
                    {children}
                </div>
            </div>

        </div>
    )

}