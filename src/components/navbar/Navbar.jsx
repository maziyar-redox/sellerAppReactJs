import React from "react";
import InfinityAnimate from "../animate/InfinityAnimate";
import NavbarItem from "./NavbarItem";
import useWindowsSize from "../../hooks/useWindowsSize";
import ProfileAvatar from "../../nextUi/ProfileAvatar";
import NotificationDropdown from "../../nextUi/NotificationDropdown";
import { Input } from "@nextui-org/react";
import { useState } from "react";
import { pages } from "../../data/data";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiSquares2X2, HiMiniQueueList } from "react-icons/hi2"
import { AiFillStar } from "react-icons/ai";
import { RiHeartPulseFill } from "react-icons/ri";
import { BiSearchAlt } from "react-icons/bi";
import { BsFillBellFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
    const { width } = useWindowsSize();
    const [activePage, setActivePage] = useState(pages.home);
    const [isMenu, setIsMenu] = useState(false);
    const clickHandler = (e) => {
        e.currentTarget.classList.toggle('opened');
        e.currentTarget.setAttribute('aria-expanded', e.currentTarget.classList.contains('opened'));
        setIsMenu(!isMenu);
    };
    return (
        <>
            <nav className="flex items-center justify-between p-5 md:p-0 mx-0 md:mx-14 md:pt-6">
                <div className="relative z-30 md:hidden block">
                    <button className="menu" onClick={(e) => clickHandler(e)}>
                        <svg width="30" height="30" viewBox="0 0 100 100">
                            <path className="line line1" d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058" />
                            <path className="line line2" d="M 20,50 H 80" />
                            <path className="line line3" d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942" />
                        </svg>
                    </button>
                </div>
                <div className={`fixed z-10 top-0 bottom-0 ${isMenu ? "left-0" : "-left-full"} bg-[#5041BC] transition-all duration-100 rounded-e-3xl`}>
                    <div className="flex px-5 flex-col justify-center items-center gap-y-14">
                        <div className="border-b border-[#D8D8D8] px-5 pb-5 pt-2">
                            <InfinityAnimate classNameProp="text-white w-14 h-14" />
                        </div>
                        <div>
                            <ul className="flex flex-col gap-y-3">
                                <NavbarItem setSelectedPage={() => setActivePage(pages.home)} selectedPage={activePage} hrefLink={pages.home} menuTitle="Dashboard" svgLogo={<HiSquares2X2 size={width > 1245 ? 25 : 20} />} />
                                <NavbarItem setSelectedPage={() => setActivePage(pages.claims)} selectedPage={activePage} hrefLink={pages.claims} menuTitle="Claims" svgLogo={<IoNewspaperOutline size={width > 1245 ? 25 : 20} />} />
                                <NavbarItem setSelectedPage={() => setActivePage(pages.biller)} selectedPage={activePage} hrefLink={pages.biller} menuTitle="Biller Queue" svgLogo={<HiMiniQueueList size={width > 1245 ? 25 : 20} />} />
                                <NavbarItem setSelectedPage={() => setActivePage(pages.subscribe)} selectedPage={activePage} hrefLink={pages.subscribe} menuTitle="Subscribation" svgLogo={<AiFillStar size={width > 1245 ? 25 : 20} />} />
                                <NavbarItem setSelectedPage={() => setActivePage(pages.health)} selectedPage={activePage} hrefLink={pages.health} menuTitle="Health" svgLogo={<RiHeartPulseFill size={width > 1245 ? 25 : 20} />} />
                            </ul>
                        </div>
                    </div>
                </div>
                {isMenu ? (
                    <>
                        <div className="bg-black bg-opacity-30 top-0 left-0 right-0 bottom-0 z-0 absolute"></div>
                    </>
                ) : ""}
                <div className="md:block hidden">
                    <h1 className={`font-NunitoSans font-bold ${width > 1245 ? "text-3xl" : "text-2xl"} text-[#1F192F]`}>Dashboard</h1>
                </div>
                <div className="relative flex flex-row justify-center items-center gap-x-5 md:gap-x-8 md2:gap-x-14 pr-4 md:pr-0">
                    <div className="relative text-gray-600 focus-within:text-gray-400 md:block hidden">
                        <span className="absolute inset-y-0 right-0 flex items-center pl-2">
                            <button type="submit" className="p-1 pr-5 focus:outline-none focus:shadow-outline">
                                <BiSearchAlt size={25} className="text-mainColor" />
                            </button>
                        </span>
                        <input type="text" className="py-2 text-sm bg-[#F5F3FF] rounded-3xl pl-5 md2:pr-48 md:pr-28 focus:outline-none placeholder-[#5041BC] text-[#5041BC] font-NunitoSans font-semibold" placeholder="Search..." autoComplete="off" />
                    </div>
                    <div className="md:hidden block">
                        <Input classNames={{
                            base: "w-28 h-10",
                            mainWrapper: "h-full",
                            input: "text-small",
                            inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                        }} placeholder="Type to search..." size="sm" startContent={<BiSearchAlt size={18} />} type="search" />
                    </div>
                    <NotificationDropdown />
                    <ProfileAvatar />
                </div>
            </nav>
        </>
    );
};

export default Navbar;