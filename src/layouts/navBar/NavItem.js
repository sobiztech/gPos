import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import StarBorder from "@mui/icons-material/StarBorder";

export const SidebarData = [
  {
    id: "1001",
    title: "inbox",
    sideIcon: <InboxIcon />,
    items: [
      {
        name: "kalistan",
        id: "101",
        icon: <StarBorder />,
        to : "/employee"
      },
      { name: "kalis", id: "102", icon: <StarBorder />,
      to : "/role" }
    ]
  },
  {
    id: "1002",
    title: "send",
    sideIcon: <InboxIcon />
  },
  {
    id: "1003",
    title: "inbox",
    sideIcon: <InboxIcon />
  },
  {
    id: "1004",
    title: "inbox",
    sideIcon: <InboxIcon />
  },
  {
    id: "1005",
    title: "inbox",
    sideIcon: <InboxIcon />
  },
  {
    id: "1006",
    title: "inbox",
    sideIcon: <InboxIcon />
  }
];


