import React, { useState } from "react";
import {
  BarsI,
  CloseI,
  CloseIcon,
  Icons,
  Side,
  SideBarData,
  SideBarDataItem,
  Widgets
} from "./SideBarElement";
import { FaHome,FaPrint,FaProductHunt } from "react-icons/fa";

function SideBar() {
  const sideBardata = [
    {
      id: 100,
      name: "POS",
      icon: <FaPrint />
    },
    {
      id: 101,
      name: "DASHBOARD",
      icon: <FaHome />
    },
    {
      id: 103,
      name: "PRODUCT",
      icon: <FaProductHunt />
    },
    {
      id: 102,
      name: "PROFILE",
      icon: <FaHome />
    },
    {
      id: 103,
      name: "INVENTORY",
      icon: <FaHome />
    }
  ];
  const [show, setshow] = useState("hide");
  const [open, setopen] = useState(false);
  const closeClick = () => {
    console.log("closeClick");

    if (show === "show") {
      setshow("hide");
      setopen(false);

    } else {
      setshow("show");
      setopen(true);

    }
  };
  return (
    <Side bg={show}>
      <CloseI>
        {!open ? (
          <BarsI onClick={closeClick} />
        ) : (
          <CloseIcon onClick={closeClick} />
        )}
      </CloseI>
      <SideBarData>
        {sideBardata.map((data) => (
          <SideBarDataItem bg={show} key={data.id}>
            <Icons bg={show}>{data.icon}</Icons>
            {open && <Widgets>{data.name}</Widgets>}
          </SideBarDataItem>
        ))}
      </SideBarData>
    </Side>
  );
}

export default SideBar;
