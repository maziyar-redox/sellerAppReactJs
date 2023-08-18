import React from "react";
import useWindowsSize from "../hooks/useWindowsSize";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ItemDropdown = () => {
    const { width } = useWindowsSize();
    return (
        <>
            <Dropdown backdrop={width > 1000 ? "blur" : "transparent"}>
                <DropdownTrigger>
                    <button>
                        <BsThreeDotsVertical size={25} className="text-[#5041BC]" />
                    </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Item Actions" variant="flat">
                    <DropdownItem key="analytics">
                        Analytics
                    </DropdownItem>
                    <DropdownItem key="system">
                        System
                    </DropdownItem>
                    <DropdownItem key="configurations">
                        Configurations
                    </DropdownItem>
                    <DropdownItem key="help_and_feedback">
                        Help & Feedback
                    </DropdownItem>
                    <DropdownItem color="danger" key="settings">
                        Delete
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );
};

export default ItemDropdown;