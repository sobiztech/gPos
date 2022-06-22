import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
export const Side = styled.div`
  height: 100vh;
  width: calc(20% - 0px);
  background-color: blue;
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  position: absolute;
  z-index: 10;
  transform: ${(props) =>
    props.bg === "show" ? "translate(0%, -50px)" : "translate(-75%, -50px)"};
`;
export const CloseIcon = styled(FaTimes)`
  color: white;
  font-size: 35px;
  cursor: pointer;
  transform: translate(-10%, 0%);
`;
export const CloseI = styled.div`
  height: 70px;
  width: calc(100% - 0px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
export const BarsI = styled(FaBars)`
  color: white;
  font-size: 30px;
  cursor: pointer;
  transform: translate(-50%, 0%);
`;
export const SideBarData = styled.div`
  height: auto;
  width: calc(100% - 0px);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const SideBarDataItem = styled.div`
  height: 40px;
  width: calc(95% - 0px);
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
  ${(props) =>
    props.bg === "show" &&
    `
  &:hover {
    background-color: lightblue;
    color: white;
    border-radius: 40px;
  }`};
`;
export const Icons = styled.div`
  height: 100%;
  width: calc(20% - 0px);
  display: flex;
  justify-content: center;
  align-items: center;
  ${(props) =>
    props.bg === "hide" &&
    `
  &:hover {
    background-color: lightblue;
    color: white;
    border-radius: 40px;
  }`};
`;
export const Widgets = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  width: calc(80% - 0px);
  border-radius: 25px;
  margin-left: 10px;
  padding-left: 20px;
`;
