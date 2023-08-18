import React from "react";
import InfinityAnimate from "../animate/InfinityAnimate";
import AsideItems from "./AsideItems";
import useWindowsSize from "../../hooks/useWindowsSize";
import { IoNewspaperOutline } from "react-icons/io5";
import { HiSquares2X2, HiMiniQueueList } from "react-icons/hi2"
import { AiFillStar } from "react-icons/ai";
import { RiHeartPulseFill } from "react-icons/ri";
import { pages } from "../../data/data";
import { useState } from "react";

const Aside = () => {
    const [activePage, setActivePage] = useState(pages.home);
    const { width } = useWindowsSize();
    return (
        <>
            <aside className="hidden md:block md:col-span-2 bg-mainColor h-screen">
                <div className="flex flex-col justify-center items-center gap-y-14">
                    <div id="cont" className="border-b border-borderForLogo px-14 py-5 mt-2 cursor-pointer">
                        <InfinityAnimate classNameProp="text-white w-20 h-20" />
                    </div>
                    <div>
                        <ul className="flex flex-col gap-y-3">
                            <AsideItems setSelectedPage={() => setActivePage(pages.home)} selectedPage={activePage} hrefLink={pages.home} menuTitle="Dashboard" svgLogo={<HiSquares2X2 size={width > 1245 ? 25 : 20} />} />
                            <AsideItems setSelectedPage={() => setActivePage(pages.claims)} selectedPage={activePage} hrefLink={pages.claims} menuTitle="Claims" svgLogo={<IoNewspaperOutline size={width > 1245 ? 25 : 20} />} />
                            <AsideItems setSelectedPage={() => setActivePage(pages.biller)} selectedPage={activePage} hrefLink={pages.biller} menuTitle="Biller Queue" svgLogo={<HiMiniQueueList size={width > 1245 ? 25 : 20} />} />
                            <AsideItems setSelectedPage={() => setActivePage(pages.subscribe)} selectedPage={activePage} hrefLink={pages.subscribe} menuTitle="Subscribation" svgLogo={<AiFillStar size={width > 1245 ? 25 : 20} />} />
                            <AsideItems setSelectedPage={() => setActivePage(pages.health)} selectedPage={activePage} hrefLink={pages.health} menuTitle="Health" svgLogo={<RiHeartPulseFill size={width > 1245 ? 25 : 20} />} />
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Aside;