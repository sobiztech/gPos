import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse } from "@mui/material";
import { Link } from "react-router-dom";

export default function DropDrawer(side) {
  const [drop, setDrop] = React.useState(true);
  const open = side.open;
  const handleClick = () => {
    setDrop(!drop);
  };
  const mystyle = {
    color: "black",
    textDecoration: "none"
  };
  return (<>
    <ListItem key={side.side.id} disablePadding sx={{ display: "block" }}>
      {side.side.to ? (
        <Link to={side.side.to} style={mystyle}>
          <ListItemButton
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? "initial" : "center"
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 1 : "auto",
                justifyContent: "center"
              }}
            >
              {side.side.sideIcon}
            </ListItemIcon>
            <ListItemText
              primary={side.side.title}
              sx={{ opacity: open ? 1 : 0 }}
            />
          </ListItemButton>
        </Link>
      ) : (
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
              mr: open ? 1 : "auto",
              justifyContent: "center"
            }}
          >
            {side.side.sideIcon}
          </ListItemIcon>
          <ListItemText
            primary={side.side.title}
            sx={{ opacity: open ? 1 : 0 }}
          />
          {open && side.side.items && (drop ? <ExpandLess /> : <ExpandMore />)}
        </ListItemButton>
      )}

      <Collapse in={!drop} timeout="auto" unmountOnExit>
        {side.side.items &&
          side.side.items.map((items, index) => (
            <List key={items.id} component="div" disablePadding>
              <Link style={mystyle} to={items.to}>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: 1,
                      justifyContent: "center"
                    }}
                  >
                    {items.icon}
                  </ListItemIcon>
                  <ListItemText
                    sx={{ opacity: open ? 1 : 0 }}
                    primary={items.name}
                  />
                </ListItemButton>
              </Link>
            </List>
          ))}
      </Collapse>
    </ListItem>
    </>
  );
}
