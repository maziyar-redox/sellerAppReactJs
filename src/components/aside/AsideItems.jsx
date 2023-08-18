import React from "react";
import useWindowsSize from "../../hooks/useWindowsSize";
import { Link } from "react-router-dom";

const AsideItems = ({ svgLogo, menuTitle, hrefLink, selectedPage, setSelectedPage }) => {
    const { width } = useWindowsSize();
    return (
        <>
            <li className="block relative">
                <Link onClick={setSelectedPage} to={hrefLink} className={`flex items-center ${width > 1245 ? "py-1.5 px-5" : "py-1 px-1"} rounded-md cursor-pointer no-underline hover:no-underline transition duration-300 mx-1 ${hrefLink === selectedPage ? "text-mainColor bg-white" : "hover:text-mainColor hover:bg-white text-white"}`}>
                    <span className="mr-6">
                        {svgLogo}
                    </span>
                    <span className={`font-NunitoSans font-semibold`}>
                        {menuTitle}
                    </span>
                </Link>
            </li>
        </>
    );
};

export default AsideItems;