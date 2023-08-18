import React from "react";
import useWindowsSize from "../hooks/useWindowsSize";
import { AiOutlineUser } from "react-icons/ai";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";

const ProfileAvatar = () => {
    const { width } = useWindowsSize();
    return (
        <>
            <Dropdown placement="bottom-end" backdrop={width > 1000 ? "blur" : "transparent"}>
                <DropdownTrigger>
                    {/* <Avatar isBordered as="button" className="transition-transform" src="src/assets/img/1.jpg" /> */}
                    <button className="border-2 rounded-full p-1">
                        <AiOutlineUser size={23} />
                    </button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Profile Actions" variant="flat">
                    <DropdownItem key="profile" className="h-14 gap-2">
                        <p className="font-semibold">Sign in as</p>
                        <p className="font-semibold">Jhon Doe</p>
                    </DropdownItem>
                    <DropdownItem key="settings">
                        My Settings
                    </DropdownItem>
                    <DropdownItem key="team_settings">
                        Team Settings
                    </DropdownItem>
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
                    <DropdownItem key="logout" color="danger">
                        Log Out
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </>
    );
};

export default ProfileAvatar;