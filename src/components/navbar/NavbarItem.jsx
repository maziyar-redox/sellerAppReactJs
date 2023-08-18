import React from "react";
import { Link } from "react-router-dom";

const NavbarItem = ({ svgLogo, menuTitle, hrefLink, selectedPage, setSelectedPage }) => {
    return (
        <>
            <li className="block relative">
                <Link onClick={setSelectedPage} to={hrefLink} className={`flex items-center py-1.5 px-5 rounded-md cursor-pointer no-underline hover:no-underline transition duration-300 mx-1 ${hrefLink === selectedPage ? "text-mainColor bg-white" : "hover:text-mainColor hover:bg-white text-white"}`}>
                    <span className="mr-6">
                        {svgLogo}
                    </span>
                    <span className="font-NunitoSans font-semibold text-base">
                        {menuTitle}
                    </span>
                </Link>
            </li>
        </>
    );
}

export default NavbarItem;