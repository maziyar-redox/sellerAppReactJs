import React from "react";
import CountUp from "react-countup";
import ModalShow from "../../nextUi/ModalShow";
import { HiArrowTrendingUp, HiArrowTrendingDown } from "react-icons/hi2";

const StatusCard = ({ statusName, priceValue, isDown, valueChart, svgBadge }) => {
    return (
        <>
            <div className="row-span-1 md:col-span-3 flex flex-row justify-between bg-transparent border border-[#D3CBFB] rounded-2xl px-6 py-6">
                <div className="flex flex-col items-start gap-y-1">
                    <h1 className="font-NunitoSans font-medium text-sm text-[#797D8C]">{statusName}</h1>
                    <h2 className="font-NunitoSans font-bold text-[#1F192F] text-2xl md:text-3xl">
                        <CountUp end={priceValue} delay={1.6} duration={3} suffix="K" />
                    </h2>
                    <div className="flex flex-row items-center justify-center gap-x-2">
                        <span className={`rounded-full p-1 ${isDown ? "bg-[#B5FFCE]" : "bg-[#FFD9D7]"}`}>
                            {isDown ? <HiArrowTrendingUp size= {16} className="text-[#43BE83]" /> : <HiArrowTrendingDown size={16} className="text-[#EA8F95]" />}
                        </span>
                        <h1 className={`font-NunitoSans font-medium ${isDown ? "text-[#43BE83]" : "text-[#EA8F95]"} text-sm`}>
                            <CountUp end={valueChart} prefix={isDown ? "+" : "-"} suffix="%" delay={1.6} duration={3} />
                        </h1>
                    </div>
                </div>
                <div className="flex flex-col justify-between items-end">
                    {svgBadge}
                    <ModalShow />
                    {/* <a href="#" className="underline font-NunitoSans font-normal text-sm text-[#5041BC]">View Report</a> */}
                </div>
            </div>
        </>
    );
};

export default StatusCard;