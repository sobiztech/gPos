import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";

export const Td = styled.td`
font-size: 15px;
text-align: ${(props) => props.position};
padding-left: ${(props) => props.p}px;
padding-right: ${(props) => props.pr}px;
height: 40px;
width: ${(props) => props.wd}%;
cursor: ${(props) => props.pointer};
`;
export const Tr = styled.tr`
background-color: rgb(193, 193, 193);
box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.5);
&:hover {
  box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.5);
  background-color: rgb(186, 186, 238);
}
`;
export const Trash = styled(FaTrashAlt)`
color: red;
font-size: 20px;
cursor: pointer;
`;