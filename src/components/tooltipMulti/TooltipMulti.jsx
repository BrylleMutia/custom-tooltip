import React, { useState } from 'react';
import { nav } from "./TooltipMulti.module.css";

import CustomTooltip from "../customTooltip/CustomTooltip";

import { IconContext } from "react-icons";
import { BsBagFill, BsFillBriefcaseFill, BsFillBucketFill, BsFillChatSquareDotsFill } from "react-icons/bs";

import { Nav } from "reactstrap";

const TooltipMulti = (props) => {
    const [tooltips] = useState([
        {
            text: "Hello world!",
            placement: "right",
            icon: <BsBagFill />,
            links: [
                {
                    text: "Link text",
                    address: "#"
                },
                {
                    text: "Link text",
                    address: "#"
                },
                {
                    text: "Link text",
                    address: "#"
                },
            ]
        },
        {
            text: "Hello world!",
            placement: "right",
            icon: <BsFillBriefcaseFill />,
            links: [
                {
                    text: "Link text",
                    address: "#"
                },
                {
                    text: "Link text",
                    address: "#"
                },
                {
                    text: "Link text",
                    address: "#"
                },
            ]
        },
        {
            text: "Hello world!",
            placement: "right",
            icon: <BsFillBucketFill />,
            links: [
                {
                    text: "Link text",
                    address: "#"
                },
                {
                    text: "Link text",
                    address: "#"
                },
                {
                    text: "Link text",
                    address: "#"
                },
            ]
        },
        {
            text: "Hello world!",
            placement: "right",
            icon: <BsFillChatSquareDotsFill />,
            links: [
                {
                    text: "Link text",
                    address: "#"
                },
                {
                    text: "Link text",
                    address: "#"
                },
                {
                    text: "Link text",
                    address: "#"
                },
            ]
        },
    ])

    // global styling config for react-icons
    const iconGlobalStyles = {
        color: "#047aed",
        size: "1.8em",
    };

    return (
        <IconContext.Provider value={iconGlobalStyles}>
            <Nav vertical className={nav}>
                {tooltips.map((tooltip, index) => {
                    return <CustomTooltip key={index} item={tooltip} id={index} />;
                })}
            </Nav>
        </IconContext.Provider>
    );
};

export default TooltipMulti;