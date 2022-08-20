import styled from "styled-components";
import { FaBars, FaUserCircle } from "react-icons/fa";
export const Nav = styled.div`
  height: 50px;
  width: calc(100% - 0px);
  background-color: blue;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const NavItem1 = styled.div`
  height: 80%;
  width: 5%;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Bars = styled(FaBars)`
  height: 80%;
  width: auto;
  color: white;
  cursor: pointer;
`;
export const Profile = styled(FaUserCircle)`
  height: 80%;
  width: auto;
  color: white;
  cursor: pointer;
`;
