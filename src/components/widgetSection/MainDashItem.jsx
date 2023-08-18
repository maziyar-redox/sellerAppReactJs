import React from "react";
import CountUp from "react-countup";
import ItemDropdown from "../../nextUi/ItemDropdown";
import { AiOutlineUser } from "react-icons/ai";

const MainDashItem = () => {
    return (
        <>
            <li className="bg-transparent border border-[#EBE8FF] flex flex-row justify-between items-center py-2 md:py-3 px-0 md:px-14 pl-3 rounded-xl">
                {/* <img src="/src/assets/img/1.jpg" alt="profile pic" className="rounded-full w-7 md:w-8 h-7 md:h-8 object-cover ring-2 ring-[#5041BC] ring-opacity-30" /> */}
                <span className="border-2 rounded-full p-1">
                    <AiOutlineUser size={23} />
                </span>
                <h1 className="font-NunitoSans font-medium text-sm md:text-base text-[#54657E]">Jhon Doe</h1>
                <h2 className="hidden md:block font-NunitoSans font-bold text-[#1F192F] text-sm md:text-lg">
                    <CountUp prefix="$" end={2540.54} delay={1.2} duration={0.9} />
                </h2>
                <h3 className="hidden md:block font-NunitoSans font-normal text-base text-[#54657E]">150 Products</h3>
                <h4 className="hidden md:block font-NunitoSans font-normal text-base text-[#54657E]">105 Premium</h4>
                <h5 className="hidden md:block font-NunitoSans font-normal text-base text-[#F7941D]">+Gold</h5>
                <ItemDropdown />
            </li>
        </>
    );
}

export default MainDashItem;