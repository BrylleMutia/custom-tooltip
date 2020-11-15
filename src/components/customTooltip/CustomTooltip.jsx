import React, { useState } from "react";
import { tooltipBtn, tooltipContainer, navItem } from "./CustomTooltip.module.css";

import { Tooltip, NavItem, ListGroup, ListGroupItem } from "reactstrap";

const CustomTooltip = (props) => {
    const { item, id } = props;
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggle = () => setTooltipOpen(!tooltipOpen);

    return (
        <NavItem className={navItem}>
            <div className={tooltipBtn} id={"Tooltip-" + id}>
                {item.icon}
            </div>
            <Tooltip
                style={{ background: "#eee" }}
                placement={item.placement}
                autohide={false}
                isOpen={tooltipOpen}
                target={"Tooltip-" + id}
                toggle={toggle}
            >
                <ListGroup className={tooltipContainer}>
                    {item.links.map((link) => (
                        <ListGroupItem tag="a" href={link.address} action>
                            {link.text}
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </Tooltip>
        </NavItem>
    );
};

export default CustomTooltip;


