import React from "react";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import PeopleIcon from "@mui/icons-material/People";
import CategoryIcon from "@mui/icons-material/Category";
import AbcIcon from "@mui/icons-material/Abc";
import AppsIcon from "@mui/icons-material/Apps";
import AppsOutageIcon from "@mui/icons-material/AppsOutage";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PaymentIcon from "@mui/icons-material/Payment";
import InventoryIcon from "@mui/icons-material/Inventory";
import ShowChartIcon from "@mui/icons-material/ShowChart";

export const SidebarData = [
  {
    id: "1001",
    title: "DASHBOARD",
    sideIcon: <DashboardIcon />,
    items: [
      {
        name: "ITEM SALE DETAIL",
        id: "101",
        icon: <ShowChartIcon />,
        to: "/employee"
      },
      {
        name: "PAYMENT DETAILL",
        id: "102",
        icon: <PaymentIcon />,
        to: "/role"
      },
      { name: "STOCK DETAILL", id: "103", icon: <InventoryIcon />, to: "/role" }
    ]
  },
  {
    id: "1002",
    title: "Auth",
    sideIcon: <DashboardIcon />,
    items: [
      {
        name: "IAuthentication Route",
        id: "101",
        icon: <ShowChartIcon />,
        to: "/employee"
      },
      {
        name: "Authentication",
        id: "102",
        icon: <PaymentIcon />,
        to: "/role"
      },
      { name: "Setting", id: "103", icon: <InventoryIcon />, to: "/role" }
    ]
  },
  {
    id: "1003",
    title: "Master",
    sideIcon: <PeopleAltIcon />,
    items: [
      { name: "Property", id: "101", icon: <PeopleOutlineIcon />, to: "/role" },
      { name: "Branch", id: "102", icon: <PeopleOutlineIcon />, to: "/role" },
      {
        name: "Role",
        id: "103",
        icon: <PeopleIcon />,
        to: "/employee"
      },
      { name: "Employee", id: "104", icon: <PeopleOutlineIcon />, to: "/role" },
      {
        name: "User",
        id: "105",
        icon: <PeopleIcon />,
        to: "/employee"
      }
    ]
  },
  {
    id: "1004",
    title: "Products",
    sideIcon: <CategoryIcon />,
    items: [
      {
        name: "Distributer",
        id: "101",
        icon: <AbcIcon />,
        to: "/employee"
      },
      {
        name: "Brand",
        id: "102",
        icon: <AppsOutageIcon />,
        to: "/role"
      },
      {
        name: "Category",
        id: "103",
        icon: <AppsIcon />,
        to: "/role"
      },
      {
        name: "Sub category",
        id: "104",
        icon: <AppsIcon />,
        to: "/role"
      },
      {
        name: "Item",
        id: "105",
        icon: <AppsIcon />,
        to: "/role"
      },
      {
        name: "Size",
        id: "106",
        icon: <AppsIcon />,
        to: "/role"
      },
      {
        name: "Item selling Price",
        id: "107",
        icon: <AppsIcon />,
        to: "/role"
      },
      {
        name: "Damage status",
        id: "108",
        icon: <AppsIcon />,
        to: "/role"
      },
      {
        name: "Damage",
        id: "109",
        icon: <AppsIcon />,
        to: "/role"
      },
      {
        name: "Discount",
        id: "110",
        icon: <AppsIcon />,
        to: "/role"
      }
    ]
  },
  {
    id: "1005",
    title: "Sales",
    sideIcon: <InventoryIcon />,
    items: [
      {
        name: "Payment",
        id: "101",
        icon: <AbcIcon />,
        to: "/employee"
      },
      {
        name: "Payment Method",
        id: "102",
        icon: <AbcIcon />,
        to: "/employee"
      }
    ]
  },
  {
    id: "1006",
    title: "Stock",
    sideIcon: <InventoryIcon />,
    items: [
      {
        name: "Purchased Stock Item",
        id: "101",
        icon: <AbcIcon />,
        to: "/employee"
      },
      {
        name: "Purchased Stock Item Quantity",
        id: "102",
        icon: <AbcIcon />,
        to: "/employee"
      },
      {
        name: "Purchase Stock Item Payment",
        id: "103",
        icon: <AbcIcon />,
        to: "/employee"
      }
    ]
  },
  {
    id: "1006",
    title: "Item Transfer",
    sideIcon: <InventoryIcon />,
    items: [
      {
        name: "Item transfer",
        id: "101",
        icon: <AbcIcon />,
        to: "/employee"
      },
      {
        name: "Item Transfer Payment",
        id: "102",
        icon: <AbcIcon />,
        to: "/employee"
      }
    ]
  }
];
