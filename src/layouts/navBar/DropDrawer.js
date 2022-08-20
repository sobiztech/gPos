import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import StickyHeadTable from "../../components/table/StickyHeadTable";
import { SidebarData } from "./NavItem";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import { Link } from "react-router-dom";

function DropDrawer(side) {
  const [drop, setDrop] = React.useState(true);
  const open = side.open;
  const handleClick = () => {
    setDrop(!drop);
  };
  const mystyle = {
    color: "black",
    textDecoration: "none"
  };
  return (
    <ListItem key={side.side.id} disablePadding sx={{ display: "block" }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5
        }}
        onClick={handleClick}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center"
          }}
        >
          {side.index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
        </ListItemIcon>

        <ListItemText
          primary={side.side.title}
          sx={{ opacity: open ? 1 : 0 }}
        />
        {open && side.side.items && (drop ? <ExpandLess /> : <ExpandMore />)}
      </ListItemButton>
      <Collapse in={!drop} timeout="auto" unmountOnExit>
        {side.side.items &&
          side.side.items.map((items, index) => (
            <List key={items.id} component="div" disablePadding>
              <Link style={mystyle} to={items.to}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>{items.icon}</ListItemIcon>
                  <ListItemText primary={items.name} />
                </ListItemButton>
              </Link>
            </List>
          ))}
      </Collapse>
    </ListItem>
  );
}

export default DropDrawer;
