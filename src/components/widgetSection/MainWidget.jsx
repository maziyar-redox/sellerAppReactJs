import React from "react";
import MainDashItem from "./MainDashItem";
import StatusCard from "./StatusCard";
import ChartItem from "./ChartItem";
import { Fade } from "react-awesome-reveal";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { HiArrowTrendingUp } from "react-icons/hi2";
import { IoNewspaperOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";

const MainWidget = () => {
    return (
        <>
            <Fade cascade direction="right" triggerOnce>
                <section className="block mx-5 md:mx-14 mt-5 md:mt-3">
                    <h1 className="font-NunitoSans font-bold text-base text-[#1F192F]">Top Sales Representative</h1>
                </section>
                <section className="grid grid-cols-12 mx-5 md:ml-9 md:mr-14 mt-4">
                    <ul className="col-span-12 flex flex-col gap-y-3">
                        <MainDashItem />
                        <MainDashItem />
                        <MainDashItem />
                        <MainDashItem />
                    </ul>
                </section>
                <section className="md:hidden block mx-5 md:mx-14 mt-5 md:mt-3">
                    <h1 className="font-NunitoSans font-bold text-base text-[#1F192F]">Product Status</h1>
                </section>
                <section className="grid grid-rows-1 md:grid-cols-12 gap-y-6 md:gap-y-0 gap-x-0 md:gap-x-8 mx-5 md:ml-9 md:mr-14 mt-4 md:mt-3">
                    <StatusCard statusName="Product Sold" priceValue={25} valueChart={15} isDown={false} svgBadge={<AiOutlineShoppingCart size={28} className="text-[#1F192F]" />} />
                    <StatusCard statusName="Total Profit" priceValue={2342} valueChart={5} isDown={true} svgBadge={<HiArrowTrendingUp size={28} className="text-[#1F192F]" />} />
                    <StatusCard statusName="Total No. Of Claim" priceValue={25} valueChart={15} isDown={false} svgBadge={<IoNewspaperOutline size={28} className="text-[#1F192F]" />} />
                    <StatusCard statusName="New Costumer" priceValue={43} valueChart={10} isDown={false} svgBadge={<BsPeopleFill size={28} className="text-[#1F192F]" /> } />
                </section>
                <section className="grid grid-cols-12 mx-5 md:ml-9 md:mr-14 mt-4 md:mt-3 md:pb-0 pb-10">
                    <div className="col-span-12 flex flex-col justify-between bg-transparent border border-[#D3CBFB] rounded-2xl px-8 py-2">
                        <div className="flex flex-row justify-between items-center">
                            <h1 className="font-NunitoSans font-bold md:text-lg text-sm text-[#1F192F]">Claims Over The Year</h1>
                            <div className="flex md:flex-row flex-col items-center justify-center gap-x-3">
                                <div className="flex flex-row items-center gap-x-1">
                                    <span className="md:w-3 w-1.5 md:h-3 h-1.5 bg-[#EA8F95] rounded-full"></span>
                                    <h2 className="font-NunitoSans font-semibold md:text-base text-xs text-[#EA8F95]">Approved</h2>
                                </div>
                                <div className="flex flex-row items-center gap-x-1">
                                    <span className="md:w-3 w-1.5 md:h-3 h-1.5 bg-[#5041BC] rounded-full"></span>
                                    <h2 className="font-NunitoSans font-semibold md:text-base text-xs text-[#5041BC]">Submited</h2>
                                </div>
                            </div>
                        </div>
                        <ChartItem />
                    </div>
                </section>
            </Fade>
        </>
    );
};

export default MainWidget;