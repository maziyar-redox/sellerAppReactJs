import React from "react";
import useWindowsSize from "../hooks/useWindowsSize";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, DropdownSection} from "@nextui-org/react";
import { BsFillBellFill } from "react-icons/bs";

const NotificationDropdown = () => {
    const { width } = useWindowsSize();
    return (
        <>
            <Dropdown showArrow classNames={{
                base: "py-1 px-1 border border-default-200 bg-white dark:from-default-50 dark:to-black",
                arrow: "bg-default-200"
            }}>
                <DropdownTrigger>
                    <button className="relative">
                        <BsFillBellFill className="text-mainColor" size={width > 1000 ? 28 : 24} />
                        <span className="absolute top-1 right-1 block h-2 w-2 animate-ping rounded-full bg-[#EA8F95]" />
                    </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Dropdown menu" variant="faded">
                    <DropdownSection title="Notifications">
                        <DropdownItem key="New" startContent={<BsFillBellFill size={15} className="text-mainColor" />} description="In our seller app we...">
                            Welcome to our app
                        </DropdownItem>
                    </DropdownSection>
                </DropdownMenu>
            </Dropdown>
        </>
    );
};

export default NotificationDropdown;