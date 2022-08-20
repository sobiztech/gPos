import React from "react";
import { Bars, Nav, NavItem1, Profile } from "./NavBarElement";

function NavBar() {
  const barClick = () => {
console.log("hi");  };
  return (
    <Nav>
      <NavItem1>
        <Bars onClick={barClick} />
      </NavItem1>
      <NavItem1>
        <Profile onClick={barClick} />
      </NavItem1>
    </Nav>
  );
}

export default NavBar;
